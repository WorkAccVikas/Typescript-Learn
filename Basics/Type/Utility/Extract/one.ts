type Status = 'pending' | 'success' | 'failed' | 'cancelled';

type SuccessfulStatus = Extract<Status, 'success' | 'failed'>;

const s1: SuccessfulStatus = 'success';
const s2: SuccessfulStatus = 'failed';

type UIEvent =
  | {
      type: 'button';
      label: string;
    }
  | {
      type: 'input';
      value: string;
    }
  | {
      type: 'select';
      value: string;
      options: string[];
    };

type FormEvent = Extract<UIEvent, { type: 'input' | 'select' }>;

export {};
