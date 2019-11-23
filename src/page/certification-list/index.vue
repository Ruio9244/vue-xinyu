<template>
    <div id="q-app">
        <div class="q-pa-md">
            <q-table
                    title="捐赠信息列表"
                    :data="data"
                    :columns="columns"
                    row-key="id"
                    binary-state-sort
            >
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
    export default {
        name: "certification-list",
        data() {
            return {
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
                data: [
                    {
                        id: 'XY0000001',
                        name: '',
                        money: 159,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'Ice cream sandwich',
                        money: 237,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: '张三',
                        money: 262,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: '李四四',
                        money: 305,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: '王五五',
                        money: 356,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'Jelly bean',
                        money: 375,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'Lollipop',
                        money: 392,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'Honeycomb',
                        money: 408,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'Donut',
                        money: 452,
                        date: '2019-11-22'
                    },
                    {
                        id: 'XY0000001',
                        name: 'KitKat',
                        money: 518,
                        date: '2019-11-22'
                    }
                ]
            }
        },
        methods:
            {
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
                }
            }
    }
</script>

<style scoped>

</style>
