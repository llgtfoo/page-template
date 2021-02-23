<template>
  <div class="infomation">
    <s-table
      :columns="columns"
      :list="data"
      :pageSizeOptions="['10', '20', '30', '40']"
      :pageSize="10"
      :currentPage="1"
      :total="500"
      @rowSelection="rowSelection"
      @on-click="clickRow"
      @on-dblclick="dblclickRow"
      @on-page-change="pageChange"
      @on-show-size-change="showSizeChange"
    >
      <a slot="actions" slot-scope="text">
        <a-button type="primary" value="small" @click.stop="action(text)"
          >新增</a-button
        >
      </a>
    </s-table>
    <list-custom
      v-if="data.length !== 0"
      :columns="initColumns"
      @changeColumns="getColumns"
    ></list-custom>
  </div>
</template>

<script>
const initColumns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    align: "center",
    show: true,
  },
  {
    title: "Age",
    width: 100,
    dataIndex: "age",
    key: "age",
    fixed: "left",
    ellipsis: true,
    align: "center",
    show: true,
  },
  {
    title: "Column 1",
    dataIndex: "address",
    key: "age1",
    width: 150,
    ellipsis: "true",
    align: "center",
    show: true,
  },
  {
    title: "Column 2",
    dataIndex: "address",
    ellipsis: true,
    key: "age2",
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "age3",
    ellipsis: true,
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 4",
    dataIndex: "address",
    ellipsis: true,
    key: "age4",
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 5",
    dataIndex: "address",
    ellipsis: true,
    key: "age5",
    // width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 6",
    dataIndex: "address",
    ellipsis: true,
    key: "age6",
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 7",
    dataIndex: "address",
    ellipsis: true,
    key: "age7",
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Column 8",
    dataIndex: "address",
    ellipsis: true,
    key: "age8",
    width: 150,
    align: "center",
    show: true,
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 150,
    align: "center",
    show: true,
    scopedSlots: { customRender: "actions" },
  },
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: `llgtfoo${i}`,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
export default {
  data() {
    return {
      data,
      initColumns,
      columns: [],
    };
  },
  mounted() {
    this.columns = this.initColumns.filter((e) => e.show);
  },
  methods: {
    getColumns(columns) {
      console.log(columns, "columns");
      this.columns = columns.filter((e) => e.show);
    },
    action(data) {
      console.log(data, "action");
    },
    clickRow(data) {
      console.log(data, "clickRow");
    },
    dblclickRow(data) {
      console.log(data, "dblclickRow");
    },
    rowSelection(indexs, rows) {
      console.log(indexs, rows);
    },
    pageChange(page, pageSize) {
      console.log(page, pageSize, "pageChange");
    },
    showSizeChange(current, size) {
      console.log(current, size, "showSizeChange");
    },
  },
};
</script>

<style lang="scss" scoped>
.infomation {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
