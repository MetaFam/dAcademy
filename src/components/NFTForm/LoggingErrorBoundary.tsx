import { Maybe } from './types'
import React, {
  Component, ErrorInfo, PropsWithChildren, ReactNode,
} from 'react'

type StateType = { error?: Maybe<string> }
type PropsType = PropsWithChildren<{ fallback?: ReactNode }>

export default class LoggingErrorBoundary
extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    const msg = error.message ?? error ?? 'Unknown Error'
    return { error: msg }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack)
  }

  render() {
    if(this.state.error) {
      return <p>{this.state.error}</p>
    }

    return this.props.children
  }
}