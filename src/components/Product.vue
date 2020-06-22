<template>
 <b-card
    :title="info.title"
    :img-src="info.img"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      {{ info.desc }}
    </b-card-text>

    <b-card-text>
      Price: {{ info.price }}
    </b-card-text>

    <b-button href="#" variant="primary">Buy</b-button>
  </b-card>
</template>
<script>
export default {
    name: 'BaseProduct',

    props: {
        info: {
            type: Object,
            required: true,
        }
    }
}
</script>