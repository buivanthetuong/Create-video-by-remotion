/**
 * Logger Utility
 * 
 * Simple logging utility for development and production
 * In production, logs can be disabled via environment variables
 */

const isDevelopment = process.env.NODE_ENV !== 'production';
// ✅ Chỉ enable debug nếu:
// 1. DEBUG="true" (explicitly enabled)
// 2. Hoặc đang ở Development và không bị explicit disable (DEBUG !== "false")
const debugEnabled = process.env.DEBUG === 'true' || isDevelopment;

/**
 * Log levels
 */
export const LogLevel = {
  ERROR: 'ERROR',
  WARN: 'WARN',
  INFO: 'INFO',
  DEBUG: 'DEBUG',
};

/**
 * Logger class
 */
export class Logger {
  /**
   * Log error message
   */
  static error(message, error = null, context = {}) {
    console.error(`❌ ${message}`);
    if (error) {
      console.error('Error details:', error);
    }
    if (Object.keys(context).length > 0) {
      console.error('Context:', context);
    }
  }

  /**
   * Log warning message
   */
  static warn(message, context = {}) {
    console.warn(`⚠️  ${message}`);
    if (Object.keys(context).length > 0) {
      console.warn('Context:', context);
    }
  }

  /**
   * Log info message
   */
  static info(message, context = {}) {
    console.log(`ℹ️  ${message}`);
    if (Object.keys(context).length > 0 && debugEnabled) {
      console.log('Context:', context);
    }
  }

  /**
   * Log debug message (only in development or when DEBUG=true)
   */
  static debug(message, data = null) {
    if (!debugEnabled) return;
    
    console.log(`🐛 [DEBUG] ${message}`);
    if (data !== null) {
      console.log(data);
    }
  }

  /**
   * Log success message
   */
  static success(message, context = {}) {
    console.log(`✅ ${message}`);
    if (Object.keys(context).length > 0 && debugEnabled) {
      console.log('Context:', context);
    }
  }
}

export default Logger;
