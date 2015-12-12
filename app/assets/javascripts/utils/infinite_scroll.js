var InfiniteScroll = {
  _SCROLL_RATIO: 0.75,
  _CONTAINER: window,
  _CONTENT: document,

  componentDidMount: function() {
    this._fetchInitialData();
    $(this._CONTAINER).on("scroll", this._onScroll);
  },

  componentWillUnmount: function() {
    $(this._CONTAINER).off("scroll", this._onScroll);
  },

  _onScroll: function(e) {
    var maxScroll = $(this._CONTENT).height() - $(this._CONTAINER).height();
    var percentage = this._CONTAINER.scrollY / maxScroll;

    if (percentage >= this._SCROLL_RATIO)
      this._fetchMoreData();
  },

  _fetchInitialData: function() {
    if (typeof this.fetchInitialData !== "function")
      throw "InfiniteScroll requires fetchInitialData()";

    this._startFetching();
    this.fetchInitialData().then(this._finishFetching);
  },

  _fetchMoreData: function() {
    if (typeof this.fetchMoreData !== "function")
      throw "InfiniteScroll requires fetchMoreData()";

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
