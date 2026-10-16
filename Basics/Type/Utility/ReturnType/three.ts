function getStatus(success: boolean) {
  if (success) {
    return {
      status: 'success' as const,
      data: 'Done',
    };
  }

  return {
    status: 'error' as const,
    error: 'Something went wrong',
  };
}

type Result = ReturnType<typeof getStatus>;

function identity<T>(value: T): T {
  return value;
}

type Result1 = ReturnType<typeof identity>; // unknown

export {};
