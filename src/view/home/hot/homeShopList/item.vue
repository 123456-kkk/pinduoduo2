<template>
  <div>
    <dl v-for="item in item" :key="item.id" @click="$router.push({path:`/detail/${item.id}`,imgUrl:item.imgUrl,title:item.title})">
      <dt>
        <img :src="item.imgUrl" />
      </dt>
      <dd>
        <p>{{item.title}}</p>
        <span>￥{{item.price}}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
div {
  width: 100%;
  height: 4.48rem;
  margin-top: 10px;
}
dl {
  width: 100%;
  height: 100%;
  display: flex;
}
dt img {
  width: 4.16rem;
  height: 4.16rem;
}
span {
  color: red;
  margin: 2rem 0 0 5px;
  display: inline-block;
  font-size: 18px;
}
p {
  max-width: 5.62rem;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 30px
}
</style>
