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
                ],
                data: [
                    {
                        id: 'XY0000001',
                        name: 'Frozen Yogurt',
                        money: 159
                    },
                    {
                        id: 'XY0000001',
                        name: 'Ice cream sandwich',
                        money: 237
                    },
                    {
                        id: 'XY0000001',
                        name: 'Eclair',
                        money: 262
                    },
                    {
                        id: 'XY0000001',
                        name: 'Cupcake',
                        money: 305
                    },
                    {
                        id: 'XY0000001',
                        name: 'Gingerbread',
                        money: 356
                    },
                    {
                        id: 'XY0000001',
                        name: 'Jelly bean',
                        money: 375
                    },
                    {
                        id: 'XY0000001',
                        name: 'Lollipop',
                        money: 392
                    },
                    {
                        id: 'XY0000001',
                        name: 'Honeycomb',
                        money: 408
                    },
                    {
                        id: 'XY0000001',
                        name: 'Donut',
                        money: 452
                    },
                    {
                        id: 'XY0000001',
                        name: 'KitKat',
                        money: 518
                    }
                ]
            }
        },
        methods:
            {
                viewCertification: function (row) {
                    this.$router.push({path: '/certification', params: {row}});
                }
            }
    }
</script>

<style scoped>

</style>
