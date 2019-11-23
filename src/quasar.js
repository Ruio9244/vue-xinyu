import Vue from 'vue'

import './styles/quasar.styl'
import 'quasar/dist/quasar.ie.polyfills'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/ionicons-v4/ionicons-v4.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import {
    Quasar,
    QLayout,
    QHeader,
    QFooter,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QForm,
    QInput,
    QAvatar,
    QTable,
    QTr,
    QTd,
    QSpace,
    Loading,
    Notify,
} from 'quasar'

Vue.use(Quasar, {
    config: {},
    components: {
        QLayout,
        QHeader,
        QFooter,
        QDrawer,
        QPageContainer,
        QPage,
        QToolbar,
        QToolbarTitle,
        QBtn,
        QIcon,
        QList,
        QItem,
        QItemSection,
        QItemLabel,
        QForm,
        QInput,
        QAvatar,
        QTable,
        QTr,
        QTd,
        QSpace,
        Loading,
    },
    directives: {},
    plugins: {
        Notify
    }
})
