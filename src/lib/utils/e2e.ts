

export function encrypt_object(priv_obj) {
    const priv_obj_string = JSON.stringify(priv_obj)

    // encrypt priv_obj_string

    // decrypt priv_obj_string
    console.log('priv_obj_string', priv_obj_string)

    return priv_obj_string;
  }


// TODO: implement https://github.com/privacyresearchgroup/libsignal-protocol-typescript to encrypt/decrypt objects
