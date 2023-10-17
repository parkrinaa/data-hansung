import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Features from './views/Features';
import LoginView from './views/LoginView.vue';
import Introduct from './views/Introduct.vue';
import Rpl from './views/Rpl.vue';
import Faculty from './views/Faculty.vue';
//디테일
import Detailgraphic from './views/detail/Detailgraphic.vue';
import DetailUiux from './views/detail/DetailUiux.vue';
import Detail3d from './views/detail/Detail3d.vue';
import Animator from './views/detail/Animator.vue';
import Packagedesigner from './views/detail/Packagedesigner.vue';
import Department from './views/detail/Department.vue';
// 장바구니
import Uxdesign from './views/cartpage/Uxdesign.vue'
import Hci from './views/cartpage/Hci.vue'
import Basicstere from './views/cartpage/Basicstere.vue'
import Motion from './views/cartpage/Motion.vue'
import Mediastory from './views/cartpage/Mediastory.vue'
import Branddesign from './views/cartpage/Branddesign.vue'
import Brandstrategy from './views/cartpage/Brandstrategy.vue'
import Prototyping from './views/cartpage/Prototyping.vue'
import Photography from './views/cartpage/Photography.vue'
import Videography from './views/cartpage/Videography.vue'
import Information from './views/cartpage/Information.vue'
import Typography from './views/cartpage/Typography.vue'
import Designeditor from './views/cartpage/Designeditor.vue'
import Twod from './views/cartpage/Twod.vue'
import Threed from './views/cartpage/Threed.vue'
import Methodology from './views/cartpage/Methodology.vue'
import Basicplane from './views/cartpage/Basicplane.vue'
import Layoutdesign from './views/cartpage/Layoutdesign.vue'
import Serviceexperience from './views/cartpage/Serviceexperience.vue'
import Management from './views/cartpage/Management.vue'
import Package from './views/cartpage/Package.vue'
import Socialbusiness from './views/cartpage/Socialbusiness.vue'
import Videodesign from './views/cartpage/Videodesign.vue'
import Gui from './views/cartpage/Gui.vue'
// 마이페이지
import Qa from './views/my/Qa.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/',
      name: 'EmptyLayout',
      component: () => import('./views/EmptyLayout.vue'),
      children: [
        // 장바구니
        {
          path: '/hci',
          name: 'hci',
          component: Hci
        },
        {
          path: '/gui',
          name: 'gui',
          component: Gui
        },
        {
          path: '/uxdesign',
          name: 'uxdesign',
          component: Uxdesign
        },
        {
          path: '/basicstere',
          name: 'basicstere',
          component: Basicstere
        },
        {
          path: '/motion',
          name: 'motion',
          component: Motion
        },
        {
          path: '/mediastory',
          name: 'mediastory',
          component: Mediastory
        },
        {
          path: '/branddesign',
          name: 'branddesign',
          component: Branddesign
        },
        {
          path: '/brandstrategy',
          name: 'brandstrategy',
          component: Brandstrategy
        },
        {
          path: '/prototyping',
          name: 'prototyping',
          component: Prototyping
        },
        {
          path: '/photography',
          name: 'photography',
          component: Photography
        },
        {
          path: '/videography',
          name: 'videography',
          component: Videography
        },
        {
          path: '/information',
          name: 'information',
          component: Information
        },
        {
          path: '/typography',
          name: 'typography',
          component: Typography
        },
        {
          path: '/designeditor',
          name: 'designeditor',
          component: Designeditor
        },
        {
          path: '/threed',
          name: 'threed',
          component: Threed
        },
        {
          path: '/methodology',
          name: 'methodology',
          component: Methodology
        },
        {
          path: '/basicplane',
          name: 'basicplane',
          component: Basicplane
        },
        {
          path: '/layoutdesign',
          name: 'layoutdesign',
          component: Layoutdesign
        },
        {
          path: '/serviceexperience ',
          name: 'serviceexperience',
          component: Serviceexperience
        },
        {
          path: '/package ',
          name: 'package',
          component: Package
        },
        {
          path: '/management ',
          name: 'management',
          component: Management
        },
        {
          path: '/socialbusiness ',
          name: 'socialbusiness',
          component: Socialbusiness
        },
        {
          path: '/videodesign ',
          name: 'videodesign',
          component: Videodesign
        },
        {
          path: '/twod ',
          name: 'twod',
          component: Twod
        },
        // 상세페이지
        {
          path: '/detailUiux',
          name: 'detailUiux',
          component: DetailUiux
        },
        {
          path: '/detailgraphic',
          name: 'detailgraphic',
          component: Detailgraphic
        },
        {
          path: '/detail3d',
          name: 'detail3d',
          component: Detail3d
        },
        {
          path: '/animator',
          name: 'animator',
          component: Animator
        },
        {
          path: '/packagedesigner',
          name: 'packagedesigner',
          component: Packagedesigner
        },
        {
          path: '/department',
          name: 'department',
          component: Department
        },
        // 메인
        {
          path: '/main',
          name: 'main',
          component: Main
        },
        // 서브
        {
          path: '/introduct',
          name: 'introduct',
          component: Introduct
        },
        {
          path: '/rpl',
          name: 'rpl',
          component: Rpl
        },
        {
          path: '/faculty',
          name: 'faculty',
          component: Faculty
        },
        {
          path: '/features',
          name: 'features',
          component: Features
        },
        // 마이페이지
        {
          path: '/qa',
          name: 'qa',
          component: Qa
        },
      ],
    },
  ]
});

