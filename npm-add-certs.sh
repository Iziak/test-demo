#!/usr/bin/env bash
#
# Make npm use ATB's man-in-the-middle root certificate instead of the default
# bundled CA.
#
# This avoids the SELF_SIGNED_CERT_IN_CHAIN error that you otherwise get during
# `npm install`.

die() {
   echo "$1" 1>&2
   exit 1
}

install_mitm_cert_darwin() {
    command -v npm > /dev/null || die "npm is not installed"
    certfile="$HOME/.certs/ca.pem"
    mkdir -p "$(dirname "$certfile")"
    echo "Downloading cURL's cert bundle..."
    curl -sL https://curl.haxx.se/ca/cacert.pem > "$certfile"
    echo "Appending ATB root CA to cert bundle..."
    if ! cert=$(security find-certificate -p -c MS-P-PKI01-CA); then
        die "Unable to find MS-P-PKI01-CA cert in keychain."
    fi
    echo "$cert" >> "$certfile"
    echo "Adding cafile to .npmrc"
    npm set cafile "$certfile"
}

case $OSTYPE in
    darwin*)
        install_mitm_cert_darwin
        ;;
    *)
        die "Unsupported platform: $OSTYPE"
        ;;
esac
