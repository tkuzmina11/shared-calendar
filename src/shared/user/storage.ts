import * as R from "runtypes";
import * as D from "@begin/data";

const USER_TABLE = "USERS";

const UserData = R.Record({
  googleAccountId: R.String,
});
type UserData = R.Static<typeof UserData>;
export type User = UserData & {
  userId: string;
};

export async function getUser(userId: string): Promise<User | null> {
  const r = await D.get({
    table: USER_TABLE,
    key: userId,
  });
  const userResult = UserData.validate(r);
  return userResult.success
    ? { userId, googleAccountId: userResult.value.googleAccountId }
    : null;
}

export async function createUser(googleAccountId: string): Promise<User> {
  const user = await D.set({
    table: USER_TABLE,
    googleAccountId,
  });
  return {
    googleAccountId,
    userId: user.key,
  };
}
