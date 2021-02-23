<template>
  <div class="list-custom-list">
    <a-dropdown placement="topLeft" :trigger="['click']" v-model="visible">
      <div @click="e => e.preventDefault()">
        <a-icon type="unordered-list" />
        <span style="margin-left:10px;">列表自定义</span>
      </div>
      <a-menu slot="overlay">
        <a-checkbox
          v-for="(v,i) in columns"
          :key="i"
          :checked="v.show"
          @change="e=>onChange(e,v)"
          :disabled="v.show&&disabled"
        >
{{v.title}}
</a-checkbox>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: 'ListCustom',
  props: {
    columns: {
      type: Array,
      default: () => [],
    }, //列表项
    showNumber: {
      type: Number,
      default: 0,
    }, //最少显示多少项
  },
  data() {
    return {
      visible: false,
      disabled: false,
    }
  },
  methods: {
    onChange(e, data) {
      this.$set(data, 'show', e.target.checked)
      this.$emit('changeColumns', this.columns)
      if (this.columns.filter(v => v.show).length <= this.showNumber) {
        this.disabled = true
      } else {
        this.disabled = false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.list-custom-list {
  position: absolute;
  cursor: pointer;
  left: 0;
  bottom: 25px;
  > span {
    margin-left: 10px;
  }
}
.list-columns {
  margin: 0;
  padding: 4px 0;
  text-align: left;
  list-style-type: none;
  background-color: cyan;
  background-clip: padding-box;
  border-radius: 4px;
  outline: none;
  // box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
}
.ant-dropdown-menu {
  display: flex;
  flex-direction: column;
  // align-items: center;
  max-height: 215px !important;
  overflow-y: auto !important;
  .ant-checkbox-wrapper {
    &:first-of-type {
      margin-left: 8px;
    }
  }
}
</style>