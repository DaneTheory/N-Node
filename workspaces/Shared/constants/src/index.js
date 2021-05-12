const nGlobalStateDefinition = {
  VERSION: null,
  N_PREFIX: null,
  CACHE_DIR: null
}


const nConfigurableGlobalConstants = {
  N_PREFIX: undefined
}

const nStaticGlobalConstants = {
  VERSION: undefined
}




const CONSTANTS = {
  N_GLOBAL_STATE_DEFS: {
    ...nGlobalStateDefinition
  },
  N_GLOBAL_STATIC_DEFS: {
  	...nStaticGlobalConstants
  },
  N_GLOBAL_DYNAMIC_DEFS: {
  	...nConfigurableGlobalConstants
  }
}



export default CONSTANTS
