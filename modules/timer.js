export const timer = {
  startTime: 0,
  stopTime: 0,
  _elapsedTime: 0,
  _STATE_VALUES: ['stopped', 'started'],
  _state: 'stopped',

  get elapsedTime() {
    this._elapsedTime = !this.isStarted ? this._elapsedTime : this._elapsedTime + (this.now - this._elapsedTime);
    return this._elapsedTime;
  },

  get isStarted() {
    return this._state === 'started';
  },


  get timeRecord() {
    return Object.fromEntries(
      Object.entries({ start: this.startTime, stop: this.stopTime, elapsed: this.elapsedTime })
      .map(([k, v]) => [k, Math.trunc(v)]))
  },

  toggle(log = true) {
    if (this.isStarted) this.stop(log);
    else this.start(log);

    return this._elapsedTime;
  },

  start(log = true) {
    this._state = this._STATE_VALUES[1];
    this._elapsedTime = 0;
    this.stopTime = 0;
    this.startTime = this.now;

    if (log) { this.logTime('++++++' + this._state.toUpperCase()) }

    return this.timeRecord;
  },

  stop(log = true) {
    this._state = this._STATE_VALUES[0];
    this.stopTime = this.now;

    if (log) { this.logTime('------' + this._state.toUpperCase()) }

    return this.timeRecord;
  },

  get now() {
    return performance.now();
  },

  logTime(label) {
    console.warn('TIMER LOG > ', label || '');
    console.table(this.timeRecord);

    return this;
  },
}
