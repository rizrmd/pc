export const state = {
  become_murderer: 'no' as 'yes' | 'no',
  emotion: 'angry' as 'angry' | 'happy' | 'confused',
  flower_received: 0 as number | string,

  // you can render state in dialog using [mc_firstname]
  mc_firstname: 'Jane',
  mc_lastname: 'Doe',
}