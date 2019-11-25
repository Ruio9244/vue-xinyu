<template>
    <div id="q-app">
        <div class="q-pa-md">
            <q-table
                    title="捐赠信息列表"
                    :data="donationDetail"
                    :columns="columns"
                    :filter="filter"
                    :pagination.sync="paginationControl"
                    row-key="id"
                    binary-state-sort
            >
                <template v-slot:top>
                    <q-input rounded outlined label="请输入关键词" maxlength="12" dense debounce="300" color="primary"
                             v-model="filter">
                        <template v-slot:append>
                            <q-avatar>
                                <img src="../../../src/assets/logo.jpg">
                            </q-avatar>
                        </template>
                    </q-input>
                </template>
                <template v-slot:body="props">
                    <q-tr :props="props">
                        <q-td key="id" :props="props">
                            <a class="text-primary cursor-pointer" @click="viewCertification(props.row)">
                                {{ props.row.id }}
                            </a>
                        </q-td>
                        <q-td key="name" :props="props">
                            {{ props.row.name }}
                        </q-td>
                        <q-td key="money" :props="props">
                            <div class="text-pre-wrap">{{ props.row.money }}</div>
                        </q-td>
                        <q-td>
                            <div class="text-pre-wrap">{{ props.row.date }}</div>
                        </q-td>
                    </q-tr>
                </template>
            </q-table>
        </div>
    </div>
</template>

<script>
    import XLSX from 'xlsx'
    import axios from 'axios';

    export default {
        name: "home",
        data() {
            return {
                filter: '',
                paginationControl: { rowsPerPage: 10, page: 1 },

                columns: [
                    {
                        name: 'id',
                        required: true,
                        align: 'left',
                        label: '证书编号',
                        field: 'id',
                        sortable: true
                    },
                    {
                        name: 'name',
                        label: '捐赠主体',
                        align: 'left',
                        field: 'name',
                        format: val => `${val}`,
                        sortable: true
                    },
                    {
                        name: 'money',
                        align: 'left',
                        label: '捐赠金额',
                        field: 'money',
                        sortable: true
                    },
                    {
                        name: 'date',
                        align: 'left',
                        label: '捐赠时间',
                        field: 'date',
                        sortable: true
                    },
                ],
                donationDetail: []
            }
        },
        created() {
            var url = '/donation-detail.xlsx';  //放在public目录下的文件可以直接访问

            //读取二进制excel文件
            axios.get(url, {responseType: 'arraybuffer'})
                .then((res) => {
                    const data = new Uint8Array(res.data);
                    const workbook = XLSX.read(data, {type: 'array'});
                    const wsname = workbook.SheetNames[0];//取第一张表
                    const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
                    this.donationDetail = [];
                    ws.forEach(x => {

                        let item = {
                            id: x['证书编号'],
                            name: x['捐款人'],
                            money: x['捐款金额'],
                            date: this.formatDate(x['捐款日期'], '-')
                        };
                        this.donationDetail.push(item);
                    });
                }).catch(err => {
                this.err = err;
            })
        },
        methods: {
            viewCertification: function (row) {
                let errMsg = '';
                if (row.id === null || row.id === '') {
                    errMsg += '证书标号不可以为空！\n';
                }
                if (row.name === null || row.name === '') {
                    errMsg += '捐赠主体不可以为空！\n';
                }
                if (row.money === null || row.money === '') {
                    errMsg += '捐赠金额不可以为空！\n';
                }
                if (row.date === null || row.date === '') {
                    errMsg += '捐赠日期不可以为空！\n';
                }
                if (errMsg !== '') {
                    this.$q.notify({
                        message: errMsg,
                        color: 'red',
                        position: 'center'
                    });
                } else {
                    this.$router.push({
                        name: 'Certification',
                        params: {id: row.id, name: row.name, money: row.money, date: row.date}
                    });
                }
            },
            // 将excel中获取的日期转换为按照format分隔的形式
            formatDate(numb, format) {
                const time = new Date((numb - 1) * 24 * 3600000 + 1);
                time.setYear(time.getFullYear() - 70);
                const year = time.getFullYear() + '';
                const month = time.getMonth() + 1 + '';
                const date = time.getDate() + '';
                if (format && format.length === 1) {
                    return year + format + month + format + date
                }
                return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
            },
        }
    }
</script>

<style scoped>

</style>
