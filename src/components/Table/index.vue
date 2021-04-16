<script>
export default {
  name: 'STable',
  props: {
    columns: {
      type: Array,
      default: () => [],
    }, //列表项
    list: {
      type: Array,
      default: () => [],
    }, //数据
    bordered: {
      type: Boolean,
      default: true,
    }, //边框
    pageSizeOptions: {
      type: Array,
      default: () => ['10', '20', '30', '40', '50', '60'],
    }, //每页条数选项
    pageSize: {
      type: [String, Number],
      default: 10,
    }, //每页条数
    currentPage: {
      type: [String, Number],
      default: 1,
    }, //当前页码
    total: {
      type: [String, Number],
      default: 0,
    }, //总条数
  },
  data() {
    return {
      scroll: {},
      selectedRowKeys: [],
      currentPageSize: this.pageSize,
    }
  },
  mounted() {
    // console.log(this.$scopedSlots, "$scopedSlots");
    //监听窗口改变
    window.addEventListener('resize', () => {
      this.autoHeight()
    })
    //销毁监听窗口改变事件
    this.$once('hook:beforeDestroy', () => {
      window.removeEventListener('resize', () => {
        this.autoHeight()
      })
    })
    this.autoHeight()
  },
  methods: {
    //页面改变
    pageChange(page, pageSize) {
      this.$emit('on-page-change', page, pageSize)
    },
    //每页条数改变
    showSizeChange(current, size) {
      this.currentPageSize = size
      this.$emit('on-show-size-change', current, size)
    },
    //数据列表行属性
    customRow(record) {
      return {
        // style: {
        //   height: "50px",
        //   overflow: "hidden"
        // },
        on: {
          // 事件
          click: event => {
            console.log(event, 'event')
            this.$emit('on-click', record)
          }, // 点击行
          // eslint-disable-next-line no-unused-vars
          dblclick: event => {
            this.$emit('on-dblclick', record)
          },
        },
      }
    },
    //多选
    onSelectChange(selectedRowKeys, selectedRows) {
      this.$emit('rowSelection', selectedRowKeys, selectedRows)
    },
    //表格计算自动高度
    autoHeight() {
      setTimeout(() => {
        const widthTotal = this.columns.reduce((prv, current) => {
          const news = current.width && current.show ? current.width : 0
          return prv + news
        }, 0)
        const x =
          widthTotal > this.$refs.STable.getBoundingClientRect().width ?
            widthTotal :
            this.$refs.STable.getBoundingClientRect().width
        this.scroll = {
          x,
          y: this.$refs.STable.getBoundingClientRect().height - 65,
        }
      }, 0)
    },
  },
  // eslint-disable-next-line no-unused-vars
  render(h) {
    const on = {
      ...this.$listeners,
    }
    const props = {
      ...this.$attrs,
      ...this.$props,
      ...{
        bordered: this.bordered,
        dataSource: this.list,
        columns: this.columns,
        tableLayout: 'fixed',
        scroll: this.scroll,
        pagination: false,
        rowKey: record => record.key,
        customHeaderRow: () => {
          return {
            style: {
              height: '65px',
            },
          }
        },
        style: { width: `calc(100% - 0px)`,height:'100%' },
        rowSelection: {
          hideDefaultSelections: true,
          onChange: this.onSelectChange,
        },
        customRow: this.customRow,
      },
    }
    // slots循环
    const slots = Object.keys(this.$slots).map(slot => {
      return <template slot={slot}>{this.$slots[slot]}</template>
    })
    //表格元素
    const table = (
      <a-table props={props} scopedSlots={this.$scopedSlots} on={on}>
        {slots} // 放这里
      </a-table>
    )
    //分页元素
    const pageProps = {
      ...this.$attrs,
      ...this.$props,
      ...{
        // current: 3,
        showSizeChanger: true,
        showQuickJumper: true,
        total: this.total,
        defaultCurrent: this.currentPage,
        defaultPageSize: this.pageSize,
        pageSize: this.currentPageSize,
        pageSizeOptions: this.pageSizeOptions,
        showTotal: total => {
          return `共   ${total}    条`
        },
      },
    }
    const pageOn = {
      ...this.$listeners,
      change: this.pageChange,
      showSizeChange: this.showSizeChange,
    }
    const page = <a-pagination props={pageProps} on={pageOn}></a-pagination>
    const noData = <not-data></not-data> //没数据时

    const html = (
      <div class="s-table">
        <div class="s-table-content" ref="STable">
          {table}
        </div>
        <div class="page-info" ref="page">
          {page}
        </div>
      </div>
    )
    const noDataHtml = <div class="s-table">{noData}</div>
    return this.list.length !== 0 ? html : noDataHtml
  },
}
</script>
<style lang="scss" scoped>
.s-table {
  height: 100%;
  width: 100%;

  .s-table-content {
    height: calc(100% - 60px);
    width: 100%;
  }
  .page-info {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<style lang='scss'>
.s-table .ant-table-body {
  overflow: auto !important;
  /* overflow-y: scroll !important; */
  height: 1000px;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
}
.s-table .ant-table-body-inner {
  overflow-y: auto !important;
}
.s-table .ant-table td,
.s-table .ant-table th {
  white-space: nowrap !important;
}
</style>
