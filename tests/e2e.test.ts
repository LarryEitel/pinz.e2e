import { encrypt_object } from '$lib/utils/e2e';

import { describe, expect, it } from 'vitest';


const priv_obj = {
    priv1: 'super secret1',
    priv2: 'super secret2'
}


describe('encrypt_object', () => {
  it('should encrypt object', () => {
    const encryptedObj = encrypt_object(priv_obj);
    expect(encryptedObj).toEqual('hello world');
  });
});
