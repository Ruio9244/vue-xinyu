<template>
    <div>
        <div class="q-pa-md" style="max-width: 400px">

            <q-form
                    @submit="onSubmit"
                    @reset="onReset"
                    class="q-gutter-md"
            >
                <q-input
                        filled
                        v-model="name"
                        label="请输入姓名"
                        hint="捐赠人或捐赠公司"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || '姓名必填']"
                ></q-input>

                <div>
                    <q-btn label="查询证书" type="submit" color="primary"></q-btn>
                    <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm"></q-btn>
                </div>
            </q-form>

        </div>
    </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                name: null,
            }
        },

        methods: {
            onSubmit() {
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Submitted'
                })
            },

            onReset() {
                this.name = null
            }
        }
    }
</script>

<style scoped>

</style>
