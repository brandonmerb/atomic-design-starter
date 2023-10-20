import { useAtomicApi } from '@atomicdesign/atomic-singularity';
import { useAtomicLogging } from "@atomicdesign/atomic-sdk/logging";
import { useAtomicVue } from '@atomicdesign/atomic-vue';
// import { OriginNebula } from '@atomicdesign/atomic-origin';

useAtomicApi()
  .use(useAtomicLogging())
  .use(useAtomicVue())
  .start()