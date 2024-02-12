import { Optional } from '@mv-d/toolbelt'
import eventsLib, { EventEmitter } from 'events'

class LoggerClass {
  #isWeb = false

  #eventEmitter: Optional<EventEmitter> = null

  constructor() {
    if ('window' in globalThis) {
      this.#isWeb = true
    } else {
      this.#eventEmitter = new eventsLib.EventEmitter()

      // this.#subscribeToNodeJsEvents()
    }
  }

  #prepareMessage(message) {
    if (!this.#isWeb) return message

    return new CustomEvent('log', {
      detail: typeof message === 'string' ? message : JSON.stringify(message)
    })
  }

  dispatch(message) {
    const data = this.#prepareMessage(message)

    if (this.#isWeb) document.dispatchEvent(this.#prepareMessage(message))
    // @ts-ignore -- temp
    else this.#eventEmitter?.emit(data)
  }
}

export const Logger = new LoggerClass()
