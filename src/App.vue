<template>
    <div id="app">
        <img :src="src" alt class="share-image"/>
        <vue-canvas-poster class="poster" :painting="painting" @success="success" @fail="fail"></vue-canvas-poster>
    </div>
</template>
<script>
    export default {
        name: "app",
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
                            url: require("./assets/template.png"),
                            left: 15,
                            top: 15,
                            width: 800,
                            height: 1161
                        },
                        // 姓名
                        {
                            type: "text",
                            content: `芜湖昊瑞财务咨询有限公司`,
                            color: "#000000",
                            fontSize: 44,
                            top: 400,
                            left: 150,
                            width: 500,
                            lineHeight: 33,
                            MaxLineNumber: 2,
                            breakWord: true
                        },
                        // 签发时间
                        {
                            type: "text",
                            content: `2019-11-17`,
                            color: "#666666",
                            fontSize: 22,
                            top: 920,
                            left: 470,
                            width: 450,
                            lineHeight: 33,
                            MaxLineNumber: 2,
                            breakWord: true
                        },
                        // 证书编号
                        {
                            type: "text",
                            content: `XY00001`,
                            color: "#666666",
                            fontSize: 22,
                            top: 1007,
                            left: 570,
                            width: 450,
                            lineHeight: 33,
                            MaxLineNumber: 2,
                            breakWord: true
                        },
                        // 证书内容1
                        {
                            type: "text",
                            content: `        感谢您捐赠1000.00元的善款，我们会将您的爱心全部用于心予孩子们的学习与生活，我们对您无私的捐赠表示诚挚的敬意！`,
                            color: "#333333",
                            fontSize: 24,
                            top: 507,
                            left: 160,
                            width: 490,
                            lineHeight: 44,
                            MaxLineNumber: 3,
                            breakWord: true
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
                            content: `特颁发此证！`,
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
                            url: require("./assets/seal.png"),
                            top: 850,
                            left: 510,
                            width: 170,
                            height: 150
                        },
                    ]
                }
            };
        },
        methods: {
            // 保存
            success(src) {
                this.src = src;
            },
            fail(err) {
                console.log("fail", err);
            }
        }
    };
</script>

<style>
    .share-image {
        max-width: 800px;
        max-height: 1131px;
        width: 100%;
        height: 100%;
        margin: 20px auto;
    }
</style>
