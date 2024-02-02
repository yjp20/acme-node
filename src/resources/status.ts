// File generated from our OpenAPI spec by Stainless.

import * as Core from 'test-acme/core';
import { APIResource } from 'test-acme/resource';
import * as StatusAPI from 'test-acme/resources/status';

export class Status extends APIResource {
  /**
   * API status check
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatusRetrieveResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusRetrieveResponse {
  message?: string;
}

export namespace Status {
  export import StatusRetrieveResponse = StatusAPI.StatusRetrieveResponse;
}
