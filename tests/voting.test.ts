
import { Cl, ClarityType } from '@stacks/transactions';
import { describe, expect, it } from 'vitest';

const accounts = simnet.getAccounts();
const wallet1 = accounts.get('wallet_1')!;
const wallet2 = accounts.get('wallet_2')!;
const deployer = accounts.get('deployer')!;

describe('Voting contract', () => {
  it('allows a user to vote yes', () => {
    const { result } = simnet.callPublicFn(
      'voting',
      'vote',
      [Cl.bool(true)],
      wallet1
    );
    expect(result).toHaveClarityType(ClarityType.ResponseOk);
  });

  it('allows a user to vote no', () => {
    const { result } = simnet.callPublicFn(
      'voting',
      'vote',
      [Cl.bool(false)],
      wallet2
    );
    expect(result).toHaveClarityType(ClarityType.ResponseOk);
  });

  it('accurately tracks vote counts', () => {
    // Wallet 1 votes YES
    simnet.callPublicFn('voting', 'vote', [Cl.bool(true)], wallet1);
    // Wallet 2 votes NO
    simnet.callPublicFn('voting', 'vote', [Cl.bool(false)], wallet2);

    const { result } = simnet.callReadOnlyFn('voting', 'get-results', [], deployer);

    // Expected result: { yes: 1, no: 1 }
    expect(result).toBeOk(Cl.tuple({
      yes: Cl.uint(1),
      no: Cl.uint(1)
    }));
  });

  it('updates counts when a user changes their vote', () => {
    // Wallet 1 votes YES
    simnet.callPublicFn('voting', 'vote', [Cl.bool(true)], wallet1);

    // Verify initial count (Yes: 1, No: 0)
    let results = simnet.callReadOnlyFn('voting', 'get-results', [], deployer);
    expect(results.result).toBeOk(Cl.tuple({ yes: Cl.uint(1), no: Cl.uint(0) }));

    // Wallet 1 changes vote to NO
    simnet.callPublicFn('voting', 'vote', [Cl.bool(false)], wallet1);

    // Verify updated count (Yes: 0, No: 1)
    results = simnet.callReadOnlyFn('voting', 'get-results', [], deployer);
    expect(results.result).toBeOk(Cl.tuple({ yes: Cl.uint(0), no: Cl.uint(1) }));
  });
});
