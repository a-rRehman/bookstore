<template>
  <div class="container mb-5">
    <div v-for="order in orderList" :key="order.OrderId">
      <div i class="card">
        <h4>
          Product Name : <span class="paragraph">{{ order.ProductName }}</span>
        </h4>
        <h4>
          Product Id :<span class="paragraph">{{ order.OrderId }}</span>
        </h4>
        <h4>
          Product Quantity : <span class="paragraph">{{ order.Quantity }}</span>
        </h4>
        <h4>
          Product Status :<span class="paragraph">{{ order.status }}</span>
        </h4>
        <VBtn
          flat
          class="review-btn"
          v-if="order.status === 'Completed'"
          @click="reviewHandler(order.OrderId, order.ProductName)"
          >Review</VBtn
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Completed",
        },
        {
          OrderId: 2,
          ProductName: "Product02",
          Quantity: 5,
          status: "Shipped",
        },
        {
          OrderId: 3,
          ProductName: "Product01",
          Quantity: 5,
          status: "To be Shipped",
        },
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Completed",
        },
        {
          OrderId: 1,
          ProductName: "Product01",
          Quantity: 5,
          status: "Shipped",
        },
      ],
    };
  },
  methods: {
    reviewHandler(id, name) {
      this.$router.push({
        name: "ReviewComponent",
        params: { order_id: id, productName: name },
      });
    },
  },
};
</script>

<style>
.card {
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 10px;
  width: 500px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 3%;
  align-items: center;
}

.paragraph {
  font-weight: 400;
}
.review-btn {
  border: 1px solid green;
  margin-top: 10px;
}
</style>
