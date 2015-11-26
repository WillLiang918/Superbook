var ImageUpload = React.createClass({
  componentWillMount: function() {
    this.$modal = $("#modal");
    this.$form = this.$modal.find("#upload-image");
    this.$previewImg = this.$form.find(".preview-image");
    this.$fileInput = this.$form.find("input[type='file']");
    this.$submit = this.$form.find("button[type='submit']");
  },
  render: function() {
    return (
      <a className="image-upload-button flex-container" onClick={this.activateModal}>
        <strong className="image-upload-icon" />
        <p>{this.props.title}</p>
      </a>
    );
  },
  activateModal: function() {
    this.$modal.addClass("is-active");
    this.$form.removeClass("hidden");
    this.$form.on("click", ".cancel", this.deactivateModal);
    this.$form.on("change", "input[type='file']", this.setPreview);
    this.$form.on("submit", this.handleSubmit);
  },
  deactivateModal: function() {
    this.$modal.removeClass("is-active");
    this.$previewImg.attr("src", "").addClass("hidden");
    this.$form.addClass("hidden").off();
  },
  setPreview: function(e) {
    var reader = new FileReader();
    var file = this.file = e.currentTarget.files[0];
    var self = this;

    reader.onloadend = function() {
      self.$previewImg.removeClass("hidden").attr("src", reader.result);
      self.$submit.prop("disabled", false);
    };

    if (file) {
      reader.readAsDataURL(file);
      self.$previewImg.addClass("hidden");
    }
  },
  handleSubmit: function(e) {
    e.preventDefault();
    if (this.file) {
      var formData = new FormData();
      formData.append("image", this.file);
      ApiUtil.uploadAvatar(formData);
    }

    this.deactivateModal();
  }
});
