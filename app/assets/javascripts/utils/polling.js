var Polling = {
  _DEFAULT_POLL_INTERVAL: 5000,

  componentDidMount: function() {
    this._startPolling();
  },

  componentWillUnmount: function() {
    this._stopPolling();
  },

  _startPolling: function() {
    this._pollingId = setInterval(this.fetchNewerData, this.pollInterval || this._DEFAULT_POLL_INTERVAL);
  },

  _stopPolling: function() {
    clearInterval(this._pollingId);
  },
};
