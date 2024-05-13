"use client";

import OneColumnWrapper from "~/components/layouts/OneColumnWrapper";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import { CONTACT_TYPE, ContactLabelType } from "./constants/contactType";
import FormRow from "~/components/ui/formRow";
// import Head from "next/head";

export default function Contact() {
  const [type, setType] = useState<ContactLabelType>(
    CONTACT_TYPE.Project.label,
  );

  return (
    <>
      {/* <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head> */}
      <OneColumnWrapper pageTitle="お問い合わせ">
        <div className="mx-auto mb-4 w-full max-w-[800px]">
          <p>必須事項を入力し、「送信する」ボタンを押してください。</p>
          <p>
            送信ボタンを押すことで、
            <a
              className="link"
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              プライバシーポリシー
            </a>
            に同意したものとみなします。
          </p>
        </div>
        <form
          action="https://ssgform.com/s/aGR7rW3U5UDF"
          method="post"
          className="mx-auto flex w-full max-w-[800px] flex-col gap-4"
        >
          <FormRow
            props={{
              classes: "",
              label: "お名前",
              required: true,
              id: "name",
            }}
          >
            <Input
              id="name"
              required
              maxLength={255}
              type="text"
              placeholder="お名前を入力"
              name="お名前"
            />
          </FormRow>
          <FormRow
            props={{
              label: "メールアドレス",
              required: true,
              id: "email",
            }}
          >
            <Input
              id="email"
              required
              maxLength={255}
              name="メールアドレス"
              type="email"
              placeholder="メールアドレスを入力"
            />
          </FormRow>
          <FormRow
            props={{
              label: "お問い合わせ種別",
              required: true,
            }}
          >
            <RadioGroup
              value={type}
              // アサーションを使わない形にしたい
              onValueChange={(v: ContactLabelType) => setType(v)}
            >
              <Input type="hidden" name="お問い合わせ種別" value={type} />
              {Object.values(CONTACT_TYPE).map((item) => {
                return (
                  <div key={item.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={item.label} id={item.label} />
                    <Label htmlFor={item.label}>{item.label}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          </FormRow>
          <FormRow
            props={{
              label: "お問い合わせ本文",
              id: "detail",
              required: true,
            }}
          >
            <Textarea
              id="detail"
              maxLength={1024}
              required
              name="お問い合わせ本文"
              placeholder="お問い合わせ本文"
            />
          </FormRow>
          {/* <div
            className="g-recaptcha"
            data-sitekey="6Lc-3NopAAAAAH7NqgrNgz7ljEAFsKNQ56FwTYlL"
          ></div> */}
          <Button
            className="mx-auto mt-4 block"
            size="lg"
            variant="primary"
            type="submit"
          >
            送信する
          </Button>
        </form>
      </OneColumnWrapper>
    </>
  );
}
