import React, { ErrorInfo, ReactNode } from 'react'


interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  error: string | null
}

export class LoggingErrorBoundary extends (
  React.Component<Props, State>
) {
  constructor(props: Props) {
    super(props);
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error.message }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error({ LoggingErrorBoundary: error, info: errorInfo })
    this.props.onError?.(error, errorInfo)
  }

  render() {
    const { error } = this.state
    if(error != null) {
      let { fallback } = this.props
      if(fallback == null) {
        fallback = (
          <h1 className="text-center mt-10">
            Error: {error}
          </h1>
        )
      }
      return fallback
    }
    return this.props.children;
  }
}