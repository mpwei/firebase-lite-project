/**
 * Function.js
 * 共用Function
 *
 * @since 0.0.1
 * @version 0.0.1
 * @author MPWEI
 * @date 2020/01/30
 */
import Vue from 'vue'

Vue.use({
    install: (_Vue) => {
        _Vue.prototype.$Function = {
            'ManagePermission': {
                'DashBoard': {
                    'Open': true,
                    'Sub': true,
                    'Path': '/dashboard'
                },
                'ThemeSetting': {
                    'Open': 'true',
                    'Sub': {
                        'Carousel': {
                            'Open': true,
                            'Path': '/theme/carousel'
                        },
                        'CustomMenu': {
                            'Open': true,
                            'Path': '/theme/menu'
                        }
                    },
                },
                'Order': {
                    'Open': true,
                    'Sub': false,
                    'Path': '/order/list'
                },
                'Product': {
                    'Open': true,
                    'Sub': {

                    },
                    'Path': '/order/list'
                },
            }
        }
    }
})