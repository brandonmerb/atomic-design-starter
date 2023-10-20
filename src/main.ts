import { useAtomicApi } from '@atomicdesign/atomic-singularity';
import { useAtomicSDK } from "@atomicdesign/atomic-sdk";
import { useAtomicVue } from '@atomicdesign/atomic-vue';
// import { OriginNebula } from '@atomicdesign/atomic-origin';

useAtomicApi()
  .use(useAtomicSDK)
  .use(useAtomicVue())
  .start()