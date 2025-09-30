import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { Tokens } from "../../../../src/enums";

// For testnet deployments, ChainSlug enum may not have some chains, therefore some keys will look like {421614:{}} instead of {[ChainSlug.ARBITRUM_SEPOLIA]:{}}. This wont affect the functionality of the project.
export const pc: ProjectConstants = {
  [DeploymentMode.SURGE]: {
    [Tokens.USDC]: {
      vaultChains: [ChainSlug.ARBITRUM_SEPOLIA, ChainSlug.OPTIMISM_SEPOLIA],
      controllerChains: [11155931],
      tokenAddresses: {
        11155931: "0x549984c0f5117244605F8A5AE5d9fA71D162d643",
      },
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          [ChainSlug.ARBITRUM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000.0",
              receivingLimit: "1000000.0",
            },
          },
          [ChainSlug.OPTIMISM_SEPOLIA]: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000.0",
              receivingLimit: "1000000.0",
            },
          },
          11155931: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000.0",
              receivingLimit: "1000000.0",
            },
          },
        },
      },
    },
  },
};
