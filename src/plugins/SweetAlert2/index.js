import swal from 'sweetalert2'

export default {
    install: (Vue) => {
        swal.mixin({
            type: 'warning',
            showCancelButton: true
        })

        // 添加全局方法
        Vue.swal = swal
        // 添加实例方法
        Vue.prototype.$swal = swal
    }
}