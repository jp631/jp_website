import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyItems: "center",
                fontSize: "3rem",

            }}>
                <p>Something went wrong. Try to reload the page</p>
                <p>If problem insist, please report it below</p>
                <address>
                <a href="mailto:noEmailYet@gmail.com">Here</a>
                </address>

            </div>
            );
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary;