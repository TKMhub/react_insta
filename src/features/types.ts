export interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

/**
 * authSlice.ts
 */
export interface PROPS_AUTHEN {
  email: string;
  password: string;
}

export interface PROPS_PROFILE {
  id: number;
  nickName: string;
  img: File | null;
}

export interface PROPS_NICKNAME {
  nickName: string;
}

/**
File インターフェース:
これは Blob インターフェースを継承しており、ファイルの属性を表すために使用されます。ファイルには以下の属性が含まれます：

lastModified: ファイルの最終変更日時を表す数値です。
name: ファイルの名前を表す文字列です。
PROPS_AUTHEN インターフェース:
ユーザーの認証情報を表すためのインターフェースです。以下の属性が含まれます：

email: ユーザーのメールアドレスを表す文字列です。
password: ユーザーのパスワードを表す文字列です。
PROPS_PROFILE インターフェース:
ユーザープロファイル情報を表すためのインターフェースです。以下の属性が含まれます：

id: ユーザーのIDを表す数値です。
nickName: ユーザーのニックネームを表す文字列です。
img: ユーザーのプロフィール画像を表す File インスタンスまたはnullです。File インターフェースを使用してファイル情報を保持します。
PROPS_NICKNAME インターフェース:
ユーザーのニックネームを更新する際に使用されるインターフェースです。以下の属性が含まれます：

nickName: 更新したいニックネームを表す文字列です。
 */
