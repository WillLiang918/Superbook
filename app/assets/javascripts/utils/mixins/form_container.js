var FormContainer = {
  getInitialState: function() {
    return {editing: new Set()};
  },
  toggleEdit: function(e) {
    var name = e.target.dataset.name, editing = this.state.editing;
    if (editing.has(name)) {
      editing.delete(name);
    } else {
      editing.add(name);
    }
    this.forceUpdate();
  }
};
