import { useAccount, useEnsAvatar, useEnsName } from 'wagmi';

export function useWalletInfo() {
  const { address } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName || undefined });

  return {
    address,
    ensName: ensName || undefined,
    ensAvatar: ensAvatar || undefined,
  };
}