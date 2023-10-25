import { useAtomicApi, DependencyInjectionMiddleware } from '@atomicdesign/atomic-singularity';
import { useAtomicSDK } from "@atomicdesign/atomic-sdk";
import { useAtomicVue } from '@atomicdesign/atomic-vue';
// import { OriginNebula } from '@atomicdesign/atomic-origin';

useAtomicApi()
  .use(useAtomicSDK())
  .use(useAtomicVue())
  // Work around for testing DI stuff temporarily
  // .use((app) => {new DependencyInjectionMiddleware()})
  .start()