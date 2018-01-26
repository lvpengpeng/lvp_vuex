<template>
  <div class="hello">
    <h3>{{msg}}</h3>
        <!-- 商品的列表 -->g
        <product></product>
        <!-- 购物车的列表 -->
        <cart></cart>
        <!-- 总数量价格 -->
        <info></info>
  </div>
</template>

<script>
import product from '../components/product'; //商品的列表组件
import cart from '../components/cart.vue'; //已选商品的组件
import info from '../components/info.vue'; //总数量价格的组件
export default {
  name: 'ShopCar',
  data () {
    return {
      msg: 'Vuex购物车demo'
    }
  },
  components: {
    product,
    cart,
    info
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>