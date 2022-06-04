const app = new Vue({
  el: "#app",
  name: "Uzaktan Kurs",
  data: {
    dataItem: { Title: "", Status: false },
    dataList: [
      {
        Id: 1,
        Title: "Ders Notlarını Hazırla",
        Status: true,
        List: "İş",
      },
      {
        Id: 2,
        Title: "Laravel Özel Ders Api Yaz",
        Status: false,
        List: "İş",
      },
      {
        Id: 3,
        Title: "Codeigniter ile Ecommerce Yap",
        Status: false,
        List: "İş",
      },
      {
        Id: 4,
        Title: "Öğretmen Atamasını Bekle",
        Status: false,
        List: "Özel",
      },
      {
        Id: 5,
        Title: "Marketten Yoğur Al",
        Status: false,
        List: "Genel",
      },
    ],
    listItems: [
      { Id: 1, Title: "Genel" },
      { Id: 2, Title: "Ozel" },
      { Id: 3, Title: "İş" },
    ],
    activeListItem: {},
    filteredDataList: {},
    newListItem: {},
  },
  methods: {
    toggleTodoListStatus(index) {
      this.todoList[index].Status = !this.todoList[index].Status;
    },
    toggleTodoListFinishedStatus(index) {
      this.todoListFinished[index].Status =
        !this.todoListFinished[index].Status;
    },
    saveItem() {
      if (this.dataItem.Title !== "") {
        this.dataItem.Id = this.dataList.length + 1;
        this.dataItem.List = this.activeListItem.Title;
        this.dataList.push(this.dataItem);
        this.clearForm();
        this.changeListItem(this.activeListItem.Id);
      }
    },
    clearForm() {
      this.dataItem = { Title: "", Status: false };
    },
    deleteItem(id) {
      this.dataList = this.dataList.filter((list) => list.Id !== id);
    },
    changeListItem(id) {
      const listItem = this.listItems.find((x) => x.Id === id);
      if (listItem !== null) {
        this.activeListItem = listItem;
        this.filteredDataList = this.dataList.filter(
          (item) => item.List == listItem.Title
        );
      }
    },
    listItemSave() {
      if (this.newListItem.Title !== null) {
        this.newListItem.Id = this.listItems.length + 1;
        this.listItems.push(this.newListItem);
        this.newListItem = {};
      }
    },
    listItemCount(title) {
      return this.dataList.filter((item) => item.List === title).length;
    },
  },
  computed: {
    todoList() {
      return this.filteredDataList.filter((todo) => todo.Status === false);
    },
    todoListFinished() {
      return this.filteredDataList.filter((todo) => todo.Status === true);
    },
  },

  created() {
    const defaultListItem = this.listItems[0];
    if (defaultListItem !== null) {
      this.changeListItem(defaultListItem.Id);
    }
  },
});
