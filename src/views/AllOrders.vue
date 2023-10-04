<!-- <template>
  <div class="container mb-5">
    <div v-for="order in orderList" :key="order.id">
      <div i class="card">
        <h4>
          Order-Id : <span class="paragraph">{{ order.id }}</span>
        </h4>
        <h4>
          Status : <span class="paragraph">{{ order.status }}</span>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      orderList: [],
    };
  },
  async beforeMount() {
    const response = await this.fetchShowAllUsersOrders();
    this.orderList = response;
    console.log(response);
  },

  methods: {
    ...mapActions("user_module", ["fetchShowAllUsersOrders"]),
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
</style> -->

<template>
  <div class="container mb-5">
    <div v-for="order in orderList" :key="order.id">
      <div class="card">
        <h4>
          Order-Id : <span class="paragraph">{{ order.id }}</span>
        </h4>
        <h4>
          Status :
          <span class="paragraph">{{ order.status }}</span>
          <VBtn flat @click="openEditDialog(order)">Edit</VBtn>
          <VBtn flat @click="deleteOrder(order.id)">Delete</VBtn>
        </h4>
      </div>
    </div>

    <!-- Edit Status Dialog -->
    <v-dialog v-model="editDialog" max-width="400">
      <v-card>
        <v-card-title>Edit Status</v-card-title>
        <v-card-text>
          <v-select v-model="editedStatus" :items="statusOptions"></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="updateStatus">Save</v-btn>
          <v-btn @click="closeEditDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      orderList: [],
      editDialog: false,
      editedStatus: null,
      selectedOrder: null,
      statusOptions: ["Pending", "Processing", "Completed", "Cancelled"],
    };
  },
  async beforeMount() {
    const response = await this.fetchShowAllUsersOrders();
    this.orderList = response;
    console.log(response);
  },

  methods: {
    ...mapActions("user_module", [
      "fetchShowAllUsersOrders",
      "updateOrderStatus",
      "deleteOrder",
    ]),

    openEditDialog(order) {
      this.selectedOrder = order;
      this.editedStatus = order.status;
      this.editDialog = true;
    },

    updateStatus() {
      if (this.selectedOrder && this.editedStatus) {
        this.updateOrderStatus({
          orderId: this.selectedOrder.id,
          status: this.editedStatus,
        });
        this.closeEditDialog();
      }
    },

    closeEditDialog() {
      this.editDialog = false;
      this.selectedOrder = null;
      this.editedStatus = null;
    },

    deleteOrder(orderId) {
      if (confirm("Are you sure you want to delete this order?")) {
        this.deleteOrder(orderId);
      }
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
</style>
