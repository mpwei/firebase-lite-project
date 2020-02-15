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
            'ManageMenu': {
                'DashBoard': {
                    'Open': true,
                    'Sub': false,
                    'Path': '/manage/dashboard'
                },
                'Theme': {
                    'Open': 'true',
                    'Sub': {
                        'ThemeCarousel': {
                            'Open': true,
                            'Path': '/manage/theme/carousel'
                        },
                        'ThemeCustomMenu': {
                            'Open': true,
                            'Path': '/manage/theme/menu'
                        }
                    },
                },
                'Order': {
                    'Open': false,
                    'Sub': false,
                    'Path': '/manage/order/list'
                },
                'Product': {
                    'Open': false,
                    'Sub': {
                        'ProductList': {
                            'Open': true,
                            'Path': '/manage/product/list'
                        },
                        'ProductAdd': {
                            'Open': true,
                            'Path': '/manage/product/add'
                        },
                        'ProductCategory': {
                            'Open': true,
                            'Path': '/manage/product/category'
                        },
                        'ProductAddCategory': {
                            'Open': true,
                            'Path': '/manage/product/add_category'
                        },
                    },
                },
                'Post': {
                    'Open': true,
                    'Sub': {
                        'PostList': {
                            'Open': true,
                            'Path': '/manage/post/list'
                        },
                        'PostAdd': {
                            'Open': true,
                            'Path': '/manage/post/add'
                        },
                        'PostCategory': {
                            'Open': true,
                            'Path': '/manage/post/category'
                        },
                        'PostAddCategory': {
                            'Open': true,
                            'Path': '/manage/post/add_category'
                        },
                    },
                },
                'Member': {
                    'Open': false,
                    'Sub': {
                        'MemberList': {
                            'Open': true,
                            'Path': '/manage/member/list'
                        },
                        'MemberAdd': {
                            'Open': true,
                            'Path': '/manage/member/add'
                        },
                        'AdminList': {
                            'Open': true,
                            'Path': '/manage/admin/list'
                        },
                        'AdminAdd': {
                            'Open': true,
                            'Path': '/manage/admin/add'
                        },
                        'MemberGroup': {
                            'Open': false,
                            'Path': '/manage/member/group'
                        },
                        'AdminGroup': {
                            'Open': false,
                            'Path': '/manage/admin/group'
                        },
                        'AdminPermission': {
                            'Open': false,
                            'Path': '/manage/admin/permission'
                        },
                    },
                },
                'MessageCenter': {
                    'Open': false,
                    'Sub': {
                        'Customer': {
                            'Open': true,
                            'Path': '/manage/message/customer'
                        },
                        'System': {
                            'Open': true,
                            'Path': '/manage/message/system'
                        },
                    }
                }
            }
        }
    }
})