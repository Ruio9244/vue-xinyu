<template>
    <div class="text-center">
        <img :src="src" alt class="share-image"/>
        <vue-canvas-poster class="poster" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
    </div>
</template>
<script>
    export default {
        name: "certification",
        components: {},
        data() {
            return {
                src: "",
                painting: {
                    width: 830,
                    height: 1161,
                    views: [
                        // 本地图片
                        {
                            type: "image",
                            url: require("../../assets/template.png"),
                            left: 15,
                            top: 15,
                            width: 800,
                            height: 1161
                        },
                        // 证书内容2
                        {
                            type: "text",
                            content: `        您的爱心会让我们的孩子重现希望，您的付出将被永远铭记！`,
                            color: "#333333",
                            fontSize: 24,
                            top: 650,
                            left: 160,
                            width: 490,
                            lineHeight: 44,
                            MaxLineNumber: 3,
                            breakWord: true
                        },
                        // 证书内容3
                        {
                            type: "text",
                            content: `        特颁发此证！`,
                            color: "#333333",
                            fontSize: 24,
                            top: 750,
                            left: 160,
                            width: 490,
                            lineHeight: 44,
                            MaxLineNumber: 3,
                            breakWord: true
                        },
                        // 本地图片
                        {
                            type: "image",
                            url: require("../../assets/seal.png"),
                            top: 850,
                            left: 180,
                            width: 170,
                            height: 150
                        },
                    ]
                }
            };
        },
        created() {
            const params = this.$route.params;
            // 先计算名字长度
            // const nameLength = this.stringLen(params.name.length);
            this.painting.views.push(
                // 姓名
                {
                    type: "text",
                    content: params.name + '：',
                    color: "#000000",
                    fontSize: 44,
                    top: 400,
                    left: 160,
                    width: 300,
                    lineHeight: 45,
                    MaxLineNumber: 2,
                    breakWord: true
                }
            );
            this.painting.views.push(
                // 签发时间
                {
                    type: "text",
                    content: params.date,
                    color: "#666666",
                    fontSize: 22,
                    top: 920,
                    left: 470,
                    width: 450,
                    lineHeight: 33,
                    MaxLineNumber: 2,
                    breakWord: true
                }
            );
            this.painting.views.push(
                // 证书编号
                {
                    type: "text",
                    content: params.id,
                    color: "#666666",
                    fontSize: 22,
                    top: 1007,
                    left: 570,
                    width: 450,
                    lineHeight: 33,
                    MaxLineNumber: 2,
                    breakWord: true
                },
            );
            this.painting.views.push(
                // 证书内容1
                {
                    type: "text",
                    content: `        感谢您捐赠 ` + Number(params.money).toFixed(2) + ` 元的善款，我们会将您的爱心全部用于心予孩子们的学习与生活，我们对您无私的捐赠表示诚挚的敬意！`,
                    color: "#333333",
                    fontSize: 24,
                    top: 507,
                    left: 160,
                    width: 490,
                    lineHeight: 44,
                    MaxLineNumber: 3,
                    breakWord: true
                },
            );
        },
        methods: {
            // 保存
            success(src) {
                this.src = src;
            },
            fail(err) {
                console.log("fail", err);
            },
        }
    };
</script>

<style>
    .share-image {
        max-width: 800px;
        max-height: 1131px;
        width: 100%;
        height: 100%;
        margin: 20px;
    }
</style>
