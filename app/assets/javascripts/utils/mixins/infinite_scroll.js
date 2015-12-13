var InfiniteScroll = {
  SCROLL_RATIO: 0.75,
  CONTAINER: window,
  CONTENT: document,

  componentDidMount: function() {
    this._fetchInitialData();
    $(this.CONTAINER).on("scroll", this._onScroll);
  },

  componentWillUnmount: function() {
    $(this.CONTAINER).off("scroll", this._onScroll);
  },

  _onScroll: function(e) {
    var maxScroll = $(this.CONTENT).height() - $(this.CONTAINER).height();
    var percentage = this.CONTAINER.scrollY / maxScroll;

    if (percentage >= this.SCROLL_RATIO)
      this._fetchMoreData();
  },

  _fetchInitialData: function() {
    if (typeof this.fetchInitialData !== "function")
      throw "Must implement fetchInitialData()";

    this._startFetching();
    this.fetchInitialData().then(this._finishFetching);
  },

  _fetchMoreData: function() {
    if (typeof this.fetchMoreData !== "function") 
      throw "Must implement fetchMoreData()";

    if (this._isFetching) return;
    this._startFetching();
    this.fetchMoreData().then(this._finishFetching);
  },

  _startFetching: function() {
    this._isFetching = true;
  },

  _finishFetching: function() {
    this._isFetching = false;
  }
};
