var InfiniteScroll = {
  _SCROLL_RATIO: 0.75,

  componentDidMount: function() {
    this._fetchInitialData();
    $(window).on("scroll", this._onScroll);
  },

  componentWillUnmount: function() {
    $(window).off("scroll", this._onScroll);
  },

  _onScroll: function(e) {
    var maxScroll = $(document).height() - $(window).height();
    var percentage = window.scrollY / maxScroll;

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
