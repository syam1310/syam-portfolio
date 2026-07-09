export function reportLovableError(error: unknown, _context?: Record<string, unknown>) {
  console.error("Lovable error report", error, _context);
}
