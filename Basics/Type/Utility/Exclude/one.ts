type Status = 'pending' | 'success' | 'failed' | 'cancelled';

type ActiveStatus = Exclude<Status, 'cancelled' | 'failed'>;

const status: ActiveStatus = 'pending'; // ✅
const status2: ActiveStatus = 'cancelled'; // ❌

type Event =
  | { type: 'click'; x: number; y: number }
  | { type: 'keypress'; key: string }
  | { type: 'submit'; formId: string };

type NonSubmitEvent = Exclude<Event, { type: 'submit' }>;

const x1: NonSubmitEvent = {
    type:'submit';
    formId: 'se'
}

export {};
