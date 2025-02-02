(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1931],
  {
    88677: function () {},
    62808: function () {},
    11922: function () {},
    35883: function () {},
    46601: function () {},
    71456: function () {},
    89214: function () {},
    88350: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 11226));
    },
    11226: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return su;
          },
        });
      var a,
        n,
        l = s(57437);
      let i = [
        { title: "AI Dapps Store", hash: "store" },
        { title: "AI Agent Chat", hash: "ai-agent-chat" },
        { title: "My AI Agent", hash: "my-agents" },
        { title: "Create", hash: "create" },
        { title: "Create Agent", hash: "create-agent" },
        { title: "My AI Dapps", hash: "my-apps" },
        { title: "Stake", hash: "stake" },
        { title: "Earn", hash: "earn" },
      ];
      var r = s(2265);
      let d = (0, r.createContext)(void 0);
      function o(e) {
        let { children: t } = e,
          [s, a] = (0, r.useState)(i[1].hash);
        return (0, l.jsx)(d.Provider, {
          value: { activeTab: s, setActiveTab: a },
          children: t,
        });
      }
      var c = s(57818),
        x = s(16463),
        u = s(49354),
        p = s(24648),
        m = s(59772);
      let h = {
        hidden: { opacity: 0, y: 80 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            ease: "linear",
            type: "spring",
            stiffness: 100,
          },
        },
        exit: { opacity: 0, y: 80, transition: { ease: "easeOut" } },
      };
      var f = s(25678);
      function g(e) {
        let {
            forms: t,
            schema: s,
            currentStep: a,
            setCurrentStep: n,
            form: i,
          } = (0, r.useContext)(e),
          d = ei();
        if (void 0 === i) throw Error("A react-hook-form must be defined");
        let o = t.length,
          c = () => {
            a < o - 1 && n((e) => e + 1);
          },
          x = 0 === a,
          u = a === o - 1,
          p = t[a].label,
          m = async (e) => {
            u && (await d(e)), c();
          },
          g = t.map((e) => e.label),
          b = (0, r.useCallback)(() => {
            let e = t[a].form;
            return (0, l.jsx)(f.E.div, {
              variants: h,
              className: "flex flex-col gap-2 w-full",
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: (0, l.jsx)(e, {}),
            });
          }, [t, a]);
        return {
          form: i,
          currentStep: a,
          steps: o,
          nextStep: c,
          previousStep: () => {
            a > 0 && n((e) => e - 1);
          },
          goToStep: (e) => {
            e >= 0 && e < o && n((t) => e);
          },
          isFirstStep: x,
          isLastStep: u,
          labels: g,
          currentStepLabel: p,
          CurrentForm: b,
          onSubmit: m,
          onErrors: (e) => {
            let s = t[a].fields.flat(),
              n = new Set(Object.keys(e).flat()),
              l = !1;
            for (let e of s) n.has(e) && (l = !0);
            l || (null == i || i.clearErrors(), c());
          },
        };
      }
      var b = s(89733),
        j = s(81724),
        v = s(66648),
        y = s(39343),
        w = s(63355),
        C = s(57200);
      let A = (0, s(12218).j)(
          "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        ),
        N = r.forwardRef((e, t) => {
          let { className: s, ...a } = e;
          return (0, l.jsx)(C.f, {
            ref: t,
            className: (0, u.cn)(A(), s),
            ...a,
          });
        });
      N.displayName = C.f.displayName;
      let k = y.RV,
        B = r.createContext({}),
        F = (e) => {
          let { ...t } = e;
          return (0, l.jsx)(B.Provider, {
            value: { name: t.name },
            children: (0, l.jsx)(y.Qr, { ...t }),
          });
        },
        E = () => {
          let e = r.useContext(B),
            t = r.useContext(M),
            { getFieldState: s, formState: a } = (0, y.Gc)(),
            n = s(e.name, a);
          if (!e) throw Error("useFormField should be used within <FormField>");
          let { id: l } = t;
          return {
            id: l,
            name: e.name,
            formItemId: "".concat(l, "-form-item"),
            formDescriptionId: "".concat(l, "-form-item-description"),
            formMessageId: "".concat(l, "-form-item-message"),
            ...n,
          };
        },
        M = r.createContext({}),
        T = r.forwardRef((e, t) => {
          let { className: s, ...a } = e,
            n = r.useId();
          return (0, l.jsx)(M.Provider, {
            value: { id: n },
            children: (0, l.jsx)("div", {
              ref: t,
              className: (0, u.cn)("space-y-2", s),
              ...a,
            }),
          });
        });
      T.displayName = "FormItem";
      let S = r.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { error: n, formItemId: i } = E();
        return (0, l.jsx)(N, {
          ref: t,
          className: (0, u.cn)(n && "text-destructive", s),
          htmlFor: i,
          ...a,
        });
      });
      S.displayName = "FormLabel";
      let L = r.forwardRef((e, t) => {
        let { ...s } = e,
          {
            error: a,
            formItemId: n,
            formDescriptionId: i,
            formMessageId: r,
          } = E();
        return (0, l.jsx)(w.g7, {
          ref: t,
          id: n,
          "aria-describedby": a ? "".concat(i, " ").concat(r) : "".concat(i),
          "aria-invalid": !!a,
          ...s,
        });
      });
      L.displayName = "FormControl";
      let _ = r.forwardRef((e, t) => {
        let { className: s, ...a } = e,
          { formDescriptionId: n } = E();
        return (0, l.jsx)("p", {
          ref: t,
          id: n,
          className: (0, u.cn)("text-[0.8rem] text-muted-foreground", s),
          ...a,
        });
      });
      _.displayName = "FormDescription";
      let D = r.forwardRef((e, t) => {
        let { className: s, children: a, ...n } = e,
          { error: i, formMessageId: r } = E(),
          d = i ? String(null == i ? void 0 : i.message) : a;
        return d
          ? (0, l.jsx)("p", {
              ref: t,
              id: r,
              className: (0, u.cn)(
                "text-[0.8rem] font-medium text-destructive",
                s
              ),
              ...n,
              children: d,
            })
          : null;
      });
      D.displayName = "FormMessage";
      var Z = (e) => {
        let { options: t, label: s, name: a, className: n } = e,
          { control: i } = (0, y.Gc)();
        return (0, l.jsxs)(T, {
          className: "space-y-4",
          children: [
            (0, l.jsx)(S, {
              className: "text-[#1b1b1b] text-xl font-semibold",
              children: s,
            }),
            (0, l.jsx)(y.Qr, {
              control: i,
              name: a,
              render: (e) => {
                let { field: s } = e;
                return (0, l.jsx)(L, {
                  children: (0, l.jsx)("div", {
                    className: (0, u.cn)("flex flex-col gap-3", n),
                    children: t.map((e, t) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className: (0, u.cn)(
                            "p-4  rounded-xl border  justify-start items-start gap-1 inline-flex hover:cursor-pointer",
                            s.value === e.value &&
                              "border-[#ff306e] bg-[#ff306e]/5"
                          ),
                          onClick: () => {
                            if ("eliza" === e.value) s.onChange(e.value);
                            else {
                              (0, j.R)(
                                "error",
                                "This feature is disabled for now."
                              );
                              return;
                            }
                          },
                          children: [
                            (0, l.jsxs)("div", {
                              className:
                                "grow shrink basis-0  justify-start items-start gap-4 flex",
                              children: [
                                e.icon &&
                                  (0, l.jsx)("div", {
                                    className:
                                      "w-9 h-9 p-2.5 bg-[#ff306e]/10 rounded-[999px] border border-[#ff306e]/5 justify-center items-center flex",
                                    children: (0, l.jsx)(v.default, {
                                      src: e.icon,
                                      alt: e.title,
                                    }),
                                  }),
                                (0, l.jsxs)("div", {
                                  className:
                                    "grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className:
                                        "self-stretch text-[#1b1b1b] text-base font-semibold  leading-normal",
                                      children: e.title,
                                    }),
                                    (0, l.jsx)("div", {
                                      className:
                                        "self-stretch text-[#666666] text-sm font-normal  leading-tight",
                                      children: e.description,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: (0, u.cn)(
                                "w-6 h-6 p-[4.50px] relative bg-white/5 rounded-xl border-2 border-[#d8d8d8]  justify-center items-center inline-flex overflow-hidden",
                                s.value === e.value &&
                                  "bg-[#ff306e] border-[#ff306e]"
                              ),
                              children: (0, l.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                children: (0, l.jsx)("path", {
                                  d: "M13.0005 4.25L6.12549 11.125L3.00049 8",
                                  stroke: "white",
                                  "stroke-width": "2.5",
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                }),
                              }),
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                });
              },
            }),
            (0, l.jsx)(D, {}),
          ],
        });
      };
      let H = [
          {
            title: "Verifiable(TEE)",
            description:
              "Verifiable agents run in a Trusted Execution Environment (TEE) such as Intel SGX, Intel TDX, AWS Nitro Enclave and AMD SEV. Such agents guarantee non human/machine interference and generate verifiable proofs of correct execution.",
            icon: {
              src: "/_next/static/media/tick.61b98201.svg",
              height: 16,
              width: 16,
              blurWidth: 0,
              blurHeight: 0,
            },
            value: "verifiable",
          },
          {
            title: "Non-Verifiable(NVM)",
            description:
              "Non-verifiable agents run on standard hardware and do not provide any guarantees of non human/machine interference.",
            icon: {
              src: "/_next/static/media/cross.739f4321.svg",
              height: 16,
              width: 16,
              blurWidth: 0,
              blurHeight: 0,
            },
            value: "non-verifiable",
          },
        ],
        R = [
          {
            title: "Agentkit",
            description:
              "The Agentkit by Coinbase simplifies bringing your AI Agents onchain. Built using LangChain.",
            value: "agentkit",
          },
          {
            title: "Base Agent",
            description: "A product by Coinbase to build on-chain agents.",
            value: "baseagent",
          },
          {
            title: "Eliza",
            description:
              "Eliza is a simple, fast, and lightweight AI agent framework",
            value: "eliza",
          },
          {
            title: "Custom",
            description: "Custom image running by users.",
            value: "customagent",
          },
        ];
      var V = s(10903);
      let W = (0, V.U)((e) => ({
          isOpen: !1,
          open: () => e({ isOpen: !0 }),
          close: () => e({ isOpen: !1 }),
        })),
        I = r.forwardRef((e, t) => {
          let { className: s, type: a, ...n } = e;
          return (0, l.jsx)("input", {
            type: a,
            className: (0, u.cn)(
              "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 placeholder:font-light text-xs ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:border-[#8CE339] placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
              s
            ),
            ref: t,
            ...n,
          });
        });
      I.displayName = "Input";
      var P = s(4919);
      function z() {
        let { control: e } = (0, y.Gc)(),
          {
            fields: t,
            append: s,
            remove: a,
          } = (0, y.Dq)({ control: e, name: "aiAgentMessageExamples" });
        return (0, l.jsxs)("div", {
          className:
            "w-full flex-col justify-start items-start gap-6 inline-flex",
          children: [
            (0, l.jsxs)("div", {
              className: "h-9 w-full justify-between items-center inline-flex",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "text-[#1b1b1b] text-sm font-medium font-inter leading-tight",
                  children: "Message Examples",
                }),
                (0, l.jsxs)(b.z, {
                  type: "button",
                  className:
                    "self-stretch px-4 py-1.5 bg-[#1b1b1b] rounded-[999px] justify-center items-center gap-2 flex",
                  onClick: () => s({ message: "", response: "" }),
                  children: [
                    (0, l.jsx)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      children: (0, l.jsx)("path", {
                        d: "M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM9.25 9.25H6.25V10.75H9.25V13.75H10.75V10.75H13.75V9.25H10.75V6.25H9.25V9.25Z",
                        fill: "white",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-white text-base font-semibold font-inter leading-normal",
                      children: "Add",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className:
                "self-stretch relative  rounded-xl flex-col md:flex-row justify-center flex-wrap items-start gap-3 inline-flex overflow-hidden",
              children: t.map((e, t) =>
                (0, l.jsx)(U, { index: t, remove: a }, e.id)
              ),
            }),
          ],
        });
      }
      let U = (e) => {
        let { index: t, remove: s } = e,
          {
            control: a,
            formState: { errors: n },
          } = (0, y.Gc)();
        return (0, l.jsxs)(T, {
          className:
            "h-[172px] w-full justify-start items-start gap-2 flex space-y-0",
          children: [
            (0, l.jsx)("div", {
              className:
                "w-6 h-6 justify-center items-center flex hover:cursor-pointer",
              onClick: () => s(t),
              children: (0, l.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: (0, l.jsx)("path", {
                  d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.33 11.25 16.67 11.59 16.67 12C16.67 12.41 16.34 12.75 15.92 12.75Z",
                  fill: "#1B1B1B",
                }),
              }),
            }),
            (0, l.jsx)(y.Qr, {
              name: "aiAgentMessageExamples.".concat(t, ".userAsk"),
              control: a,
              render: (e) => {
                let { field: t } = e;
                return (0, l.jsx)(L, {
                  children: (0, l.jsx)("div", {
                    className:
                      "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                    children: (0, l.jsx)(P.g, {
                      value: t.value,
                      onChange: (e) => t.onChange(e.target.value),
                      placeholder: "Write an example user message...",
                      className:
                        "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex",
                    }),
                  }),
                });
              },
            }),
            (0, l.jsx)(y.Qr, {
              name: "aiAgentMessageExamples.".concat(t, ".agentResponse"),
              control: a,
              render: (e) => {
                let { field: t } = e;
                return (0, l.jsx)(L, {
                  children: (0, l.jsx)("div", {
                    className:
                      "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                    children: (0, l.jsx)(P.g, {
                      value: t.value,
                      onChange: (e) => t.onChange(e.target.value),
                      placeholder: "Write the character’s response...",
                      className:
                        "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex",
                    }),
                  }),
                });
              },
            }),
          ],
        });
      };
      function K() {
        let { control: e } = (0, y.Gc)(),
          {
            fields: t,
            append: s,
            remove: a,
          } = (0, y.Dq)({ control: e, name: "aiAgentAdjectives" });
        return (
          (0, r.useEffect)(() => {
            s("");
          }),
          (0, l.jsxs)("div", {
            className:
              "w-full flex-col justify-start items-start gap-6 inline-flex",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "h-9 w-full justify-between items-center inline-flex",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "text-[#1b1b1b] text-sm font-medium font-inter leading-tight",
                    children: "Character adjectives",
                  }),
                  (0, l.jsxs)(b.z, {
                    type: "button",
                    className:
                      "self-stretch px-4 py-1.5 bg-[#1b1b1b] rounded-[999px] justify-center items-center gap-2 flex",
                    onClick: () => s(""),
                    children: [
                      (0, l.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                          d: "M10 17.5C5.85775 17.5 2.5 14.1422 2.5 10C2.5 5.85775 5.85775 2.5 10 2.5C14.1422 2.5 17.5 5.85775 17.5 10C17.5 14.1422 14.1422 17.5 10 17.5ZM9.25 9.25H6.25V10.75H9.25V13.75H10.75V10.75H13.75V9.25H10.75V6.25H9.25V9.25Z",
                          fill: "white",
                        }),
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "text-white text-base font-semibold font-inter leading-normal",
                        children: "Add",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "self-stretch relative  rounded-xl flex-col md:flex-row justify-center flex-wrap items-start gap-3 inline-flex overflow-hidden",
                children: t.map((e, t) =>
                  (0, l.jsx)(G, { index: t, remove: a }, e.id)
                ),
              }),
            ],
          })
        );
      }
      let G = (e) => {
        let { index: t, remove: s } = e,
          {
            control: a,
            formState: { errors: n },
          } = (0, y.Gc)();
        return (0, l.jsxs)(T, {
          className:
            "h-[80px] w-full justify-start items-start gap-2 flex space-y-0",
          children: [
            (0, l.jsx)("div", {
              className:
                "w-6 h-6 justify-center items-center flex hover:cursor-pointer",
              onClick: () => s(t),
              children: (0, l.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: (0, l.jsx)("path", {
                  d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM15.92 12.75H7.92C7.51 12.75 7.17 12.41 7.17 12C7.17 11.59 7.51 11.25 7.92 11.25H15.92C16.33 11.25 16.67 11.59 16.67 12C16.67 12.41 16.34 12.75 15.92 12.75Z",
                  fill: "#1B1B1B",
                }),
              }),
            }),
            (0, l.jsx)(y.Qr, {
              name: "aiAgentAdjectives.".concat(t),
              control: a,
              render: (e) => {
                let { field: t } = e;
                return (0, l.jsx)(L, {
                  children: (0, l.jsx)("div", {
                    className:
                      "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                    children: (0, l.jsx)(P.g, {
                      value: t.value,
                      onChange: (e) => t.onChange(e.target.value),
                      placeholder: "Enter an adjective",
                      className:
                        "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex",
                    }),
                  }),
                });
              },
            }),
          ],
        });
      };
      var O = (e) => {
          let { name: t, icon: s, description: a } = e,
            { control: n } = (0, y.Gc)();
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-10",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "h-[162px] flex-col justify-start items-start gap-6 inline-flex",
                children: [
                  (0, l.jsx)(v.default, { src: s, alt: t }),
                  (0, l.jsxs)("div", {
                    className: "flex-col justify-start items-start gap-2 flex",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "text-[#1b1b1b]  md:text-5xl text-4xl font-semibold font-inter",
                        children: t,
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "text-[#666666] text-base font-normal font-inter leading-normal",
                        children: a,
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "h-8 flex-col justify-start items-start gap-2 inline-flex",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "justify-start items-start gap-2 inline-flex",
                        children: [
                          (0, l.jsx)("div", {
                            className: "w-6 h-6 relative overflow-hidden",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                  fill: "#F6B51E",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                  fill: "#F6B51E",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-[#1b1b1b] text-lg font-semibold font-inter",
                            children: "Character details",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                      }),
                    ],
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentName",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Name" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(I, { placeholder: "", ...t }),
                          }),
                          (0, l.jsx)(D, {}),
                          (0, l.jsx)(_, {
                            children:
                              "This is your AI Agent's age. Minimum age is 18.",
                          }),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentBio",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Bio" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className:
                                "h-[194px] pr-1  md:text-sm text-xs  leading-tight",
                              placeholder:
                                "Andrew Tate is a former kickboxer, entrepreneur, and self-proclaimed misogynist.\n\nHe is a strong advocate for masculinity and believes in the importance of strength and dominance in relationships.\n\nHe is a self-proclaimed misogynist and believes that women should be submissive to men.\n\nPeople call him the 'King of Men' and he believes that he is the best at everything he does.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentLore",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Lore" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className:
                                "h-[194px] pr-1 md:text-sm text-xs leading-tight",
                              placeholder:
                                "Andrew Tate is a former kickboxer, entrepreneur, and self-proclaimed misogynist.\n\nHe is a strong advocate for masculinity and believes in the importance of strength and dominance in relationships.\n\nHe is a self-proclaimed misogynist and believes that women should be submissive to men.\n\nPeople call him the 'King of Men' and he believes that he is the best at everything he does.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentTopics",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Topics" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className:
                                "h-[122px] md:text-sm text-xs leading-tight",
                              placeholder:
                                "Enumerate the subjects the character is well-versed in or passionate about. Write one complete sentence per line.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "h-8 flex-col justify-start items-start gap-2 inline-flex",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "justify-start items-start gap-2 inline-flex",
                        children: [
                          (0, l.jsx)("div", {
                            className: "w-6 h-6 relative overflow-hidden",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                  fill: "#FF306E",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                  fill: "#FF306E",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-[#1b1b1b] text-lg font-semibold font-inter",
                            children: "Style",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                      }),
                    ],
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentGeneralStyle",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "General Style" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className: "h-[122px] md:text-sm text-xs",
                              placeholder:
                                "Outline the character’s overall communication style. Mention speech patterns, mannerisms and common expressions. Write one complete sentence per line.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentChatStyle",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Chat Style" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className: "h-[122px] md:text-sm text-xs",
                              placeholder:
                                "Explain the character’s conversational behavior. Include typical responses and chat-specific quirks. Write one complete sentence per line.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentPostStyle",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Post Style" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className: "h-[122px] md:text-sm text-xs",
                              placeholder:
                                "Detail the character’s approach to writing posts or longer content. Include their formatting preferences and overall writing style.Write one comlete sentence per line.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "h-8 flex-col justify-start items-start gap-2 inline-flex",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "justify-start items-start gap-2 inline-flex",
                        children: [
                          (0, l.jsx)("div", {
                            className: "w-6 h-6 relative overflow-hidden",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                  fill: "#FF8447",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                  fill: "#FF8447",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-[#1b1b1b] text-lg font-semibold font-inter",
                            children: "Examples",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                      }),
                    ],
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentPostExamples",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "Post Examples" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(P.g, {
                              className: "h-[122px] md:text-sm text-xs",
                              placeholder:
                                "Provide sample posts showcasing the character’s writing style. Include various types of content they might produce. Write each post on a new line.",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(z, {}),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-6",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "h-8 flex-col justify-start items-start gap-2 inline-flex",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "justify-start items-start gap-2 inline-flex",
                        children: [
                          (0, l.jsx)("div", {
                            className: "w-6 h-6 relative overflow-hidden",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsx)("path", {
                                  d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                  fill: "#7D52F4",
                                }),
                                (0, l.jsx)("path", {
                                  d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                  fill: "#7D52F4",
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "text-[#1b1b1b] text-lg font-semibold font-inter",
                            children: "Adjectives",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                      }),
                    ],
                  }),
                  (0, l.jsx)(K, {}),
                ],
              }),
            ],
          });
        },
        X = (e) => {
          let { name: t, icon: s, description: a } = e,
            { control: n } = (0, y.Gc)();
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-10",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "h-[162px] flex-col justify-start items-start gap-6 inline-flex",
                children: [
                  (0, l.jsx)(v.default, { src: s, alt: t }),
                  (0, l.jsxs)("div", {
                    className: "flex-col justify-start items-start gap-2 flex",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "text-[#1b1b1b] text-5xl font-semibold font-inter",
                        children: t,
                      }),
                      (0, l.jsx)("div", {
                        className:
                          "text-[#666666] text-base font-normal font-inter leading-normal",
                        children: a,
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "text-[#1b1b1b] text-2xl font-semibold font-inter",
                    children: "Setup environmental variables",
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentAge",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "AI Agent Age" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(I, {
                              type: "number",
                              placeholder: "OpenAI Key",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentApiKeyName",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "CDP API Key Name" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(I, {
                              placeholder: "CDP API Key Name",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                  (0, l.jsx)(F, {
                    control: n,
                    name: "aiAgentPrivateKey",
                    render: (e) => {
                      let { field: t } = e;
                      return (0, l.jsxs)(T, {
                        children: [
                          (0, l.jsx)(S, { children: "CDP Private Key" }),
                          (0, l.jsx)(L, {
                            children: (0, l.jsx)(I, {
                              placeholder: "CDP Private Key",
                              ...t,
                            }),
                          }),
                          (0, l.jsx)(D, {}),
                        ],
                      });
                    },
                  }),
                ],
              }),
            ],
          });
        };
      let J = [
        {
          key: "agentkit",
          name: "Agentkit",
          description:
            "The Agentkit by Coinbase simplifies bringing your AI Agents onchain.\nBuilt using LangChain.",
          icon: {
            src: "/_next/static/media/agentkit-agent.3824989c.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          key: "baseagent",
          name: "Base Agent",
          description: "A product by Coinbase to build on-chain agents.",
          icon: {
            src: "/_next/static/media/base-agent.9fc6948b.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          key: "eliza",
          name: "Eliza",
          description:
            "Eliza is a simple, fast, and lightweight AI agent framework",
          icon: {
            src: "/_next/static/media/eliza-agent.2df71fb1.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
        {
          key: "customagent",
          name: "Custom Agent",
          description: "Custom image running by users.",
          icon: {
            src: "/_next/static/media/custom-agent.737c4273.svg",
            height: 48,
            width: 48,
            blurWidth: 0,
            blurHeight: 0,
          },
        },
      ];
      var q = s(68352),
        Q = s(32399),
        Y = s(3274),
        $ = s(26735);
      let ee = [
        {
          value: "x-access",
          icon: "\uD83D\uDC26",
          name: "X Access",
          description: "\uD83D\uDD25 Burn 1 $XETRA",
        },
        {
          value: "discord-access",
          icon: "\uD83D\uDC7E",
          name: "Discord Access",
          description: "\uD83D\uDD25 Burn 1 $XETRA",
        },
        {
          value: "twitter-access",
          icon: "\uD83D\uDCAC",
          name: "Twitter Access",
          description: "\uD83D\uDD25 Burn 1 $XETRA",
        },
        {
          value: "telegram-access",
          icon: "\uD83D\uDCF1",
          name: "Telegram Access",
          description: "\uD83D\uDD25 Burn 1 $XETRA",
        },
        {
          value: "twitter-access-2",
          icon: "⚡",
          name: "Twitter Access",
          description: "\uD83D\uDD25 Burn 1 $XETRA",
        },
      ];
      function et() {
        let e = (0, y.Gc)();
        return (0, l.jsx)(T, {
          children: (0, l.jsx)(y.Qr, {
            control: e.control,
            name: "features",
            render: (e) => {
              let { field: t } = e;
              return (0, l.jsxs)("div", {
                className:
                  "w-full flex-col justify-start items-start gap-4 inline-flex",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "self-stretch justify-start items-start gap-2 inline-flex",
                    children: (0, l.jsx)("div", {
                      className:
                        "text-[#1b1b1b] text-2xl font-semibold font-inter",
                      children: "Feature",
                    }),
                  }),
                  (0, l.jsxs)("div", {
                    className:
                      "self-stretch relative p-3 bg-[#f5f5f7]  rounded-xl flex-col md:flex-row justify-center flex-wrap items-start gap-3 inline-flex overflow-hidden",
                    children: [
                      !1,
                      ee.map((e, s) =>
                        (0, l.jsxs)(
                          "div",
                          {
                            className:
                              "w-full md:w-[180px] h-[170px] py-4 bg-white rounded-xl border border-[#d8d8d8] flex-col justify-start items-center gap-4 inline-flex overflow-hidden",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#1b1b1b] text-2xl font-bold font-inter",
                                children: e.icon,
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex-col justify-start items-center gap-2 flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "text-[#1b1b1b] text-lg font-semibold font-inter",
                                    children: e.name,
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "text-[#666666] text-sm font-normal font-inter leading-tight",
                                    children: e.description,
                                  }),
                                ],
                              }),
                              (0, l.jsx)(b.z, {
                                variant: "outline",
                                type: "button",
                                className: (0, u.cn)(
                                  "px-4 py-2 rounded-[999px] border border-[#ff306e] justify-center items-center gap-2 inline-flex overflow-hidden text-center text-[#ff306e] text-xs font-medium font-inter leading-none hover:text-[#ff306e]"
                                ),
                                onClick: () => {
                                  t.value.includes(e.value)
                                    ? t.onChange(
                                        t.value.filter((t) => t !== e.value)
                                      )
                                    : t.onChange([...t.value, e.value]);
                                },
                                children: (0, l.jsx)("div", {
                                  className: (0, u.cn)(""),
                                  children: t.value.includes(e.value)
                                    ? "Disable"
                                    : "Enable",
                                }),
                              }),
                            ],
                          },
                          s
                        )
                      ),
                    ],
                  }),
                ],
              });
            },
          }),
        });
      }
      var es = s(54662);
      function ea() {
        let { isOpen: e } = W();
        return (0, l.jsx)(es.Vq, {
          open: e,
          onOpenChange: W().close,
          children: (0, l.jsxs)(es.cZ, {
            className:
              "w-[368px] h-[329px] p-6 bg-neutral-50 rounded-3xl border-4 border-white flex-col justify-start items-center gap-[30px] inline-flex overflow-hidden",
            children: [
              (0, l.jsxs)("div", {
                className: "w-[100px] h-[100px] relative",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "w-[100px] h-[100px] left-0 top-0 absolute bg-[#ffebec] rounded-full",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "w-[46px] left-[27px] top-[27px] absolute justify-center items-center inline-flex",
                    children: (0, l.jsxs)("div", {
                      className:
                        "w-12 h-12 relative flex-col justify-start items-start flex overflow-hidden",
                      children: [
                        (0, l.jsx)("div", {
                          className: "w-[45.94px] h-12 relative",
                          children: (0, l.jsxs)("svg", {
                            width: "48",
                            height: "48",
                            viewBox: "0 0 48 48",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              (0, l.jsx)("path", {
                                d: "M24 48C36.6853 48 46.9688 37.2548 46.9688 24C46.9688 10.7452 36.6853 0 24 0C11.3147 0 1.03125 10.7452 1.03125 24C1.03125 37.2548 11.3147 48 24 48Z",
                                fill: "#E88102",
                              }),
                              (0, l.jsx)("path", {
                                d: "M24 45.4688C36.5558 45.4688 46.7344 35.2902 46.7344 22.7344C46.7344 10.1785 36.5558 0 24 0C11.4442 0 1.26562 10.1785 1.26562 22.7344C1.26562 35.2902 11.4442 45.4688 24 45.4688Z",
                                fill: "#FDD835",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M33.0758 1.88477L3.15078 31.8004C2.14766 29.5035 1.51953 27.0098 1.33203 24.3941L25.6602 0.0566406C28.2758 0.253516 30.7695 0.881641 33.0758 1.88477Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M43.8094 11.5781L12.8437 42.5437C10.9125 41.4562 9.16875 40.0969 7.64062 38.5125L39.7875 6.375C41.3625 7.89375 42.7219 9.64687 43.8094 11.5781Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M38.86 5.52109L6.79746 37.5836C6.30059 37.0023 5.82246 36.393 5.38184 35.7648L37.0412 4.10547C37.6693 4.54609 38.2787 5.02422 38.86 5.52109Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M46.0225 17.0621L18.3287 44.7559C17.4943 44.5402 16.6787 44.2777 15.8818 43.9777L45.2443 14.6152C45.5443 15.4121 45.8068 16.2277 46.0225 17.0621Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M46.7344 22.7344C46.7344 22.8938 46.7344 23.0437 46.725 23.2031C46.4812 10.8656 36.4031 0.9375 24 0.9375C11.5969 0.9375 1.51875 10.8656 1.275 23.2031C1.275 23.0437 1.26562 22.8938 1.26562 22.7344C1.26562 10.1813 11.4469 0 24 0C36.5531 0 46.7344 10.1813 46.7344 22.7344Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.5",
                                d: "M42.4688 23.7188C42.4688 33.5531 34.4906 41.5312 24.6562 41.5312C19.1344 41.5312 14.1938 39.0094 10.9219 35.0625C14.175 38.5781 18.825 40.7812 24 40.7812C33.8344 40.7812 41.8125 32.8031 41.8125 22.9688C41.8125 18.6562 40.2844 14.7094 37.7344 11.625C40.6687 14.8031 42.4688 19.05 42.4688 23.7188Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("path", {
                                d: "M24 40.7812C33.8376 40.7812 41.8125 32.8063 41.8125 22.9688C41.8125 13.1312 33.8376 5.15625 24 5.15625C14.1624 5.15625 6.1875 13.1312 6.1875 22.9688C6.1875 32.8063 14.1624 40.7812 24 40.7812Z",
                                fill: "#F39E09",
                              }),
                              (0, l.jsx)("path", {
                                d: "M37.5 11.3438C34.3781 8.65312 30.3188 7.03125 25.875 7.03125C16.0406 7.03125 8.0625 15.0094 8.0625 24.8438C8.0625 29.2875 9.68437 33.3469 12.375 36.4688C8.5875 33.1969 6.1875 28.3687 6.1875 22.9688C6.1875 13.1344 14.1656 5.15625 24 5.15625C29.3906 5.15625 34.2281 7.55625 37.5 11.3438Z",
                                fill: "#E88102",
                              }),
                              (0, l.jsx)("path", {
                                opacity: "0.25",
                                d: "M38.8594 13.1344C27.3281 17.1844 18.0656 26.0813 13.5281 37.3781C13.1344 37.0875 12.75 36.7875 12.375 36.4594C9.68437 33.3375 8.0625 29.2781 8.0625 24.8438C8.0625 15.0094 16.0406 7.03125 25.875 7.03125C30.3188 7.03125 34.3781 8.65313 37.4906 11.3438C37.9875 11.9156 38.4375 12.5156 38.8594 13.1344Z",
                                fill: "white",
                              }),
                              (0, l.jsx)("g", {
                                filter: "url(#filter0_d_190_2389)",
                                children: (0, l.jsx)("path", {
                                  d: "M31.7143 16.2857H28.9286V13.5H26.1429V16.2857H23.3571V13.5H20.5714V16.2857H17.7857V19.0714H15V21.8571H17.7857V24.6429H15V27.4286H17.7857V30.2143H20.5714V33H23.3571V30.2143H26.1429V33H28.9286V30.2143H31.7143V27.4286H34.5V24.6429H31.7143V21.8571H34.5V19.0714H31.7143V16.2857ZM23.3571 21.8571H26.1429V24.6429H23.3571V21.8571Z",
                                  fill: "#FDD835",
                                }),
                              }),
                              (0, l.jsx)("mask", {
                                id: "mask0_190_2389",
                                maskUnits: "userSpaceOnUse",
                                x: "15",
                                y: "13",
                                width: "20",
                                height: "20",
                                children: (0, l.jsx)("path", {
                                  d: "M31.7143 16.2857H28.9286V13.5H26.1429V16.2857H23.3571V13.5H20.5714V16.2857H17.7857V19.0714H15V21.8571H17.7857V24.6429H15V27.4286H17.7857V30.2143H20.5714V33H23.3571V30.2143H26.1429V33H28.9286V30.2143H31.7143V27.4286H34.5V24.6429H31.7143V21.8571H34.5V19.0714H31.7143V16.2857ZM23.3571 21.8571H26.1429V24.6429H23.3571V21.8571Z",
                                  fill: "#FDD835",
                                }),
                              }),
                              (0, l.jsxs)("g", {
                                mask: "url(#mask0_190_2389)",
                                children: [
                                  (0, l.jsx)("path", {
                                    opacity: "0.5",
                                    d: "M34.7437 3.32812L4.81875 33.2438C3.81562 30.9469 3.1875 28.4531 3 25.8375L27.3281 1.5C29.9437 1.69687 32.4375 2.325 34.7437 3.32812Z",
                                    fill: "white",
                                  }),
                                  (0, l.jsx)("path", {
                                    opacity: "0.5",
                                    d: "M45.4773 13.0215L14.5117 43.9871C12.5805 42.8996 10.8367 41.5402 9.30859 39.9559L41.4555 7.81836C43.0305 9.33711 44.3898 11.0902 45.4773 13.0215Z",
                                    fill: "white",
                                  }),
                                  (0, l.jsx)("path", {
                                    opacity: "0.5",
                                    d: "M40.5289 6.96445L8.46641 39.027C7.96953 38.4457 7.49141 37.8363 7.05078 37.2082L38.7102 5.54883C39.3383 5.98945 39.9477 6.46758 40.5289 6.96445Z",
                                    fill: "white",
                                  }),
                                  (0, l.jsx)("path", {
                                    opacity: "0.5",
                                    d: "M47.6914 18.5055L19.9977 46.1992C19.1633 45.9836 18.3477 45.7211 17.5508 45.4211L46.9133 16.0586C47.2133 16.8555 47.4758 17.6711 47.6914 18.5055Z",
                                    fill: "white",
                                  }),
                                ],
                              }),
                              (0, l.jsx)("defs", {
                                children: (0, l.jsxs)("filter", {
                                  id: "filter0_d_190_2389",
                                  x: "15",
                                  y: "13.5",
                                  width: "19.5",
                                  height: "21.5",
                                  filterUnits: "userSpaceOnUse",
                                  "color-interpolation-filters": "sRGB",
                                  children: [
                                    (0, l.jsx)("feFlood", {
                                      "flood-opacity": "0",
                                      result: "BackgroundImageFix",
                                    }),
                                    (0, l.jsx)("feColorMatrix", {
                                      in: "SourceAlpha",
                                      type: "matrix",
                                      values:
                                        "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                      result: "hardAlpha",
                                    }),
                                    (0, l.jsx)("feOffset", { dy: "2" }),
                                    (0, l.jsx)("feComposite", {
                                      in2: "hardAlpha",
                                      operator: "out",
                                    }),
                                    (0, l.jsx)("feColorMatrix", {
                                      type: "matrix",
                                      values:
                                        "0 0 0 0 0.858824 0 0 0 0 0.403922 0 0 0 0 0.0156863 0 0 0 1 0",
                                    }),
                                    (0, l.jsx)("feBlend", {
                                      mode: "normal",
                                      in2: "BackgroundImageFix",
                                      result: "effect1_dropShadow_190_2389",
                                    }),
                                    (0, l.jsx)("feBlend", {
                                      mode: "normal",
                                      in: "SourceGraphic",
                                      in2: "effect1_dropShadow_190_2389",
                                      result: "shape",
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "w-[19.50px] h-[19.50px] relative",
                          children: (0, l.jsx)("div", {
                            className:
                              "w-[44.69px] h-[44.70px] left-[-12px] top-[-12px] absolute",
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "w-[19.50px] h-[18.07px] left-[57px] top-[58px] absolute",
                    children: (0, l.jsxs)("svg", {
                      width: "24",
                      height: "23",
                      viewBox: "0 0 24 23",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: [
                        (0, l.jsxs)("mask", {
                          id: "path-1-outside-1_190_2390",
                          maskUnits: "userSpaceOnUse",
                          x: "0",
                          y: "0",
                          width: "24",
                          height: "23",
                          fill: "black",
                          children: [
                            (0, l.jsx)("rect", {
                              fill: "white",
                              width: "24",
                              height: "23",
                            }),
                            (0, l.jsx)("path", {
                              "fill-rule": "evenodd",
                              "clip-rule": "evenodd",
                              d: "M12.5663 2.08098C12.0264 1.97301 11.4705 1.97301 10.9306 2.08098C9.73094 2.32091 8.69715 3.07552 8.10301 4.14498L2.49344 14.2422C2.16982 14.8247 2 15.4801 2 16.1464C2 18.312 3.75552 20.0675 5.92105 20.0675H17.5758C19.7414 20.0675 21.4969 18.312 21.4969 16.1464C21.4969 15.4801 21.327 14.8247 21.0034 14.2422L15.3939 4.14498C14.7997 3.07552 13.7659 2.32091 12.5663 2.08098Z",
                            }),
                          ],
                        }),
                        (0, l.jsx)("path", {
                          "fill-rule": "evenodd",
                          "clip-rule": "evenodd",
                          d: "M12.5663 2.08098C12.0264 1.97301 11.4705 1.97301 10.9306 2.08098C9.73094 2.32091 8.69715 3.07552 8.10301 4.14498L2.49344 14.2422C2.16982 14.8247 2 15.4801 2 16.1464C2 18.312 3.75552 20.0675 5.92105 20.0675H17.5758C19.7414 20.0675 21.4969 18.312 21.4969 16.1464C21.4969 15.4801 21.327 14.8247 21.0034 14.2422L15.3939 4.14498C14.7997 3.07552 13.7659 2.32091 12.5663 2.08098Z",
                          fill: "#FB3748",
                        }),
                        (0, l.jsx)("path", {
                          d: "M10.9306 2.08098L11.3228 4.04214V4.04214L10.9306 2.08098ZM12.5663 2.08098L12.174 4.04214L12.174 4.04214L12.5663 2.08098ZM8.10301 4.14498L6.3547 3.17369V3.17369L8.10301 4.14498ZM2.49344 14.2422L0.745121 13.2709H0.745121L2.49344 14.2422ZM21.0034 14.2422L22.7517 13.2709L22.7517 13.2709L21.0034 14.2422ZM15.3939 4.14498L13.6455 5.11626V5.11626L15.3939 4.14498ZM11.3228 4.04214C11.6038 3.98595 11.8931 3.98595 12.174 4.04214L12.9585 0.119821C12.1597 -0.0399404 11.3372 -0.0399404 10.5384 0.119821L11.3228 4.04214ZM9.85133 5.11626C10.1605 4.55971 10.6985 4.16701 11.3228 4.04214L10.5384 0.119821C8.76336 0.47482 7.23378 1.59134 6.3547 3.17369L9.85133 5.11626ZM4.24175 15.2135L9.85133 5.11626L6.3547 3.17369L0.745121 13.2709L4.24175 15.2135ZM4 16.1464C4 15.82 4.0832 15.4989 4.24175 15.2135L0.745121 13.2709C0.256444 14.1506 0 15.1402 0 16.1464H4ZM5.92105 18.0675C4.86008 18.0675 4 17.2074 4 16.1464H0C0 19.4166 2.65095 22.0675 5.92105 22.0675V18.0675ZM17.5758 18.0675H5.92105V22.0675H17.5758V18.0675ZM19.4969 16.1464C19.4969 17.2074 18.6368 18.0675 17.5758 18.0675V22.0675C20.8459 22.0675 23.4969 19.4166 23.4969 16.1464H19.4969ZM19.2551 15.2135C19.4137 15.4989 19.4969 15.82 19.4969 16.1464H23.4969C23.4969 15.1402 23.2404 14.1506 22.7517 13.2709L19.2551 15.2135ZM13.6455 5.11626L19.2551 15.2135L22.7517 13.2709L17.1422 3.17369L13.6455 5.11626ZM12.174 4.04214C12.7984 4.16701 13.3363 4.55971 13.6455 5.11626L17.1422 3.17369C16.2631 1.59134 14.7335 0.47482 12.9585 0.119821L12.174 4.04214Z",
                          fill: "#FFEBEC",
                          mask: "url(#path-1-outside-1_190_2390)",
                        }),
                        (0, l.jsx)("path", {
                          d: "M11.748 8.05139L11.748 11.6787",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                        }),
                        (0, l.jsx)("path", {
                          d: "M11.748 14.3991L11.748 14.8525",
                          stroke: "white",
                          "stroke-width": "2",
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "self-stretch h-[77px] flex-col justify-start items-center gap-2 flex",
                children: [
                  (0, l.jsx)("div", {
                    className:
                      "text-center text-[#1b1b1b] text-2xl font-semibold font-inter",
                    children: "Not Enough XETRA \uD83D\uDE14",
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "self-stretch text-center text-[#666666] text-sm font-normal font-inter leading-tight",
                    children:
                      "Make sure your wallet is connected and has sufficient funds before proceeding.",
                  }),
                ],
              }),
              (0, l.jsx)(es.GG, {
                asChild: !0,
                children: (0, l.jsx)(b.z, {
                  variant: "ghost",
                  className:
                    "self-stretch px-6 py-3 bg-[#eaeaea] rounded-[999px] justify-center items-center gap-2 inline-flex overflow-hidden",
                  children: (0, l.jsx)("div", {
                    className:
                      "text-[#1b1b1b] text-sm font-semibold font-inter leading-tight",
                    children: "Close",
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var en = s(31014);
      let el = m.z.object({
        deploymentType: m.z.enum(["verifiable", "non-verifiable"]),
        template: m.z.enum(["agentkit", "baseagent", "eliza", "customagent"]),
        aiAgentPrefixName: m.z.string(),
        aiAgentName: m.z.string(),
        aiAgentAge: m.z
          .string()
          .nullable()
          .refine((e) => !Number.isNaN(e), { message: "Age must be a number" })
          .refine((e) => e && parseInt(e, 10) >= 18, {
            message: "Age must be at least 18",
          }),
        aiAgentBio: m.z.string(),
        aiAgentLore: m.z.string(),
        aiAgentTopics: m.z.string(),
        aiAgentGeneralStyle: m.z.string(),
        aiAgentChatStyle: m.z.string(),
        aiAgentPostStyle: m.z.string(),
        aiAgentAdjectives: m.z.array(m.z.string()),
        aiAgentPostExamples: m.z.string(),
        aiAgentMessageExamples: m.z.array(
          m.z.object({ userAsk: m.z.string(), agentResponse: m.z.string() })
        ),
        aiAgentKnowledge: m.z.string(),
        aiAgentOpenAIKey: m.z.string(),
        aiAgentApiKeyName: m.z.string(),
        aiAgentPrivateKey: m.z.string(),
        features: m.z.array(m.z.string()),
      });
      var ei = () => {
        let e = (0, x.useRouter)(),
          { address: t } = (0, $.m)();
        return async (s) => {
          let a = Q.o.getState();
          (
            await (0, q.x_)(null != t ? t : "0x12312312", {
              userId: a.id,
              name: s.aiAgentName,
              knowledge: s.aiAgentKnowledge.split("\n"),
              adjectives: s.aiAgentAdjectives,
              lore: s.aiAgentLore.split("\n"),
              style: {
                all: s.aiAgentGeneralStyle.split("\n"),
                chat: s.aiAgentChatStyle.split("\n"),
                post: s.aiAgentPostStyle.split("\n"),
              },
              bio: s.aiAgentBio.split("\n"),
              messageExamples: s.aiAgentMessageExamples,
              postExamples: s.aiAgentPostExamples.split("\n"),
              topics: s.aiAgentTopics.split("\n"),
            })
          ).data &&
            ((0, j.R)("success", "Agent created successfully"),
            e.push("/?type=my-agents"));
        };
      };
      let { FormContext: er, FormProvider: ed } = (function (e, t, s) {
        let a = (0, r.createContext)(e);
        return {
          FormContext: a,
          FormProvider: (n) => {
            let { children: i } = n,
              [d, o] = (0, r.useState)(e.currentStep),
              c = (0, y.cI)({ resolver: (0, en.F)(t), defaultValues: s });
            return (0, l.jsx)(a.Provider, {
              value: { ...e, setCurrentStep: o, currentStep: d, form: c },
              children: i,
            });
          },
        };
      })(
        {
          schema: el,
          currentStep: 0,
          setCurrentStep: (e) => {},
          forms: [
            {
              id: 1,
              label: "Deploy",
              form: () => {
                let { previousStep: e } = g(er);
                return (0, l.jsxs)("div", {
                  className: "flex flex-col gap-10",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "h-[162px] flex-col justify-start items-start gap-6 inline-flex",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "w-12 h-12 px-4 py-3 bg-[#7d52f4] rounded-3xl justify-center items-center gap-2.5 inline-flex",
                          children: (0, l.jsx)("div", {
                            className: "w-6 h-6 relative",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsxs)("g", {
                                  "clip-path": "url(#clip0_1_1447)",
                                  children: [
                                    (0, l.jsx)("path", {
                                      d: "M5.40968 22.7751C5.68117 22.5036 5.89654 22.1813 6.04349 21.8266C6.19043 21.4719 6.26608 21.0918 6.2661 20.7078C6.26612 20.3239 6.19052 19.9437 6.04362 19.589C5.89671 19.2343 5.68138 18.912 5.40991 18.6405C5.13844 18.369 4.81616 18.1536 4.46146 18.0067C4.10676 17.8597 3.72659 17.7841 3.34265 17.7841C2.95872 17.784 2.57854 17.8596 2.22382 18.0065C1.86911 18.1534 1.5468 18.3688 1.2753 18.6402C0.462019 19.4531 0.140456 20.7135 0.0396751 21.8549C-0.0180563 22.5007 -0.0142894 23.1505 0.0509251 23.7956C0.0682688 23.9573 0.223894 23.9938 0.250613 23.9985H0.258581C0.323738 23.9985 1.25796 24.0196 1.54577 23.1079C1.59746 22.9379 1.6734 22.7762 1.77124 22.6279C1.8118 22.5694 1.87092 22.5263 1.93902 22.5056C2.00712 22.485 2.08021 22.4879 2.14645 22.5139C2.21269 22.5399 2.2682 22.5876 2.30398 22.6491C2.33976 22.7106 2.35371 22.7825 2.34358 22.8529C2.29683 23.1992 2.3687 23.5511 2.54749 23.8513C2.56703 23.8848 2.59614 23.9116 2.63107 23.9283C2.666 23.945 2.70514 23.9508 2.74342 23.9451C3.72217 23.7951 4.72436 23.4604 5.40968 22.7751Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M23.9769 2.19287C23.9061 0.969902 23.03 0.0938084 21.8071 0.0230271C17.653 -0.224473 13.0236 1.53709 9.41332 5.1474L8.45051 6.11022C8.10332 6.45709 7.77363 6.81303 7.46144 7.17803H4.42582C3.78129 7.20287 3.21129 7.57459 2.88879 8.12021L1.10426 11.6897C1.0566 11.8179 1.02327 11.9509 1.00488 12.0863C1.00769 12.316 1.10033 12.5354 1.26294 12.6976C1.42556 12.8597 1.64523 12.9518 1.87488 12.954H4.12863C3.83613 13.9383 4.03113 14.9072 4.65691 15.5321L8.46738 19.3426C9.09269 19.9683 10.0611 20.1633 11.0455 19.8708V22.1269C11.0483 22.3562 11.1406 22.5753 11.3027 22.7374C11.4648 22.8995 11.6839 22.9918 11.9132 22.9946C12.0486 22.9762 12.1816 22.9429 12.3097 22.8952L15.8793 21.1107C16.4249 20.7882 16.7966 20.2201 16.8214 19.5737V16.5385C17.1855 16.226 17.5414 15.8963 17.8893 15.5494L18.8521 14.5866C22.4628 10.9763 24.2244 6.34693 23.9769 2.19287ZM18.9191 9.42615C18.4894 9.85588 17.9419 10.1485 17.3459 10.2671C16.7498 10.3857 16.132 10.3248 15.5705 10.0923C15.0091 9.85971 14.5292 9.46588 14.1916 8.96058C13.8539 8.45529 13.6737 7.86122 13.6737 7.2535C13.6737 6.64578 13.8539 6.05171 14.1916 5.54641C14.5292 5.04111 15.0091 4.64728 15.5705 4.41472C16.132 4.18216 16.7498 4.12132 17.3459 4.23989C17.9419 4.35846 18.4894 4.65111 18.9191 5.08084C19.4953 5.65707 19.819 6.4386 19.819 7.2535C19.819 8.0684 19.4953 8.84992 18.9191 9.42615Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M3.70859 4.79228C3.54111 4.62473 3.44702 4.39753 3.44702 4.16063C3.44702 3.92374 3.54111 3.69654 3.70859 3.52899L6.02234 1.21524C6.19017 1.04741 6.4178 0.953125 6.65515 0.953125C6.8925 0.953125 7.12013 1.04741 7.28796 1.21524C7.4558 1.38308 7.55008 1.61071 7.55008 1.84806C7.55008 2.08541 7.4558 2.31304 7.28796 2.48087L4.97421 4.79462C4.89106 4.87775 4.79231 4.94364 4.68364 4.98853C4.57496 5.03341 4.45849 5.05641 4.34091 5.05619C4.22333 5.05597 4.10695 5.03255 3.99845 4.98726C3.88994 4.94197 3.79144 4.87571 3.70859 4.79228Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M0.354625 4.26193C0.187716 4.09446 0.0939941 3.86766 0.0939941 3.63122C0.0939941 3.39478 0.187716 3.16799 0.354625 3.00052L1.54103 1.81224C1.70962 1.64996 1.93515 1.56031 2.16914 1.56254C2.40313 1.56477 2.62691 1.65872 2.79237 1.82418C2.95783 1.98965 3.05178 2.21342 3.05401 2.44741C3.05624 2.6814 2.96659 2.90693 2.80431 3.07552L1.61791 4.26193C1.53514 4.34519 1.43672 4.41127 1.32832 4.45636C1.21992 4.50145 1.10367 4.52466 0.986266 4.52466C0.868861 4.52466 0.752614 4.50145 0.644213 4.45636C0.535812 4.41127 0.437395 4.34519 0.354625 4.26193Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M19.1329 20.2161C19.0496 20.1333 18.9835 20.0349 18.9384 19.9265C18.8933 19.8181 18.8701 19.7018 18.8701 19.5844C18.8701 19.467 18.8933 19.3508 18.9384 19.2424C18.9835 19.134 19.0496 19.0355 19.1329 18.9528L21.4461 16.6414C21.6137 16.4735 21.841 16.3791 22.0781 16.3789C22.3153 16.3787 22.5428 16.4727 22.7106 16.6402C22.8784 16.8077 22.9728 17.0351 22.9731 17.2722C22.9733 17.5093 22.8793 17.7368 22.7118 17.9047L20.3985 20.2184C20.3153 20.3015 20.2166 20.3674 20.1079 20.4123C19.9992 20.4572 19.8828 20.4802 19.7652 20.48C19.6476 20.4798 19.5312 20.4563 19.4227 20.411C19.3142 20.3658 19.2157 20.2995 19.1329 20.2161Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M19.6624 23.5696C19.495 23.402 19.4009 23.1748 19.4009 22.9379C19.4009 22.701 19.495 22.4738 19.6624 22.3063L20.8489 21.1199C20.9318 21.0368 21.0303 20.9708 21.1387 20.9258C21.2472 20.8808 21.3634 20.8575 21.4808 20.8574C21.5983 20.8573 21.7145 20.8803 21.8231 20.9252C21.9316 20.97 22.0302 21.0358 22.1133 21.1187C22.1964 21.2017 22.2624 21.3002 22.3074 21.4086C22.3524 21.517 22.3757 21.6333 22.3758 21.7507C22.3759 21.8681 22.3529 21.9844 22.308 22.0929C22.2632 22.2014 22.1974 22.3001 22.1145 22.3832L20.9281 23.5696C20.8451 23.6529 20.7465 23.719 20.6379 23.7642C20.5293 23.8093 20.4129 23.8325 20.2953 23.8325C20.1777 23.8325 20.0612 23.8093 19.9526 23.7642C19.844 23.719 19.7454 23.6529 19.6624 23.5696Z",
                                      fill: "white",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("defs", {
                                  children: (0, l.jsx)("clipPath", {
                                    id: "clip0_1_1447",
                                    children: (0, l.jsx)("rect", {
                                      width: "24",
                                      height: "24",
                                      fill: "white",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "flex-col justify-start items-start gap-2 flex",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "text-[#1b1b1b] md:text-5xl font-semibold text-4xl ",
                              children: "Deploy an agent",
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "text-[#666666] text-base font-normal  leading-normal",
                              children:
                                "Fill in the details and launch your token into the Xetra",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, l.jsx)(Z, {
                      label: "Select deployment type",
                      name: "deploymentType",
                      options: H,
                    }),
                    (0, l.jsx)(Z, {
                      label: "Select a template",
                      name: "template",
                      options: R,
                      className: "md:grid grid-cols-2",
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "h-14 justify-start items-start gap-6 inline-flex mb-10 md:mb-0",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "w-[180px] h-14 px-6 py-3 rounded-2xl justify-center items-center gap-2 flex hover:cursor-pointer",
                          onClick: () => e(),
                          children: [
                            (0, l.jsx)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: (0, l.jsx)("path", {
                                d: "M11.0452 11.9991L15.5002 16.4541L14.2276 17.7267L8.5 11.9991L14.2276 6.27148L15.5002 7.54408L11.0452 11.9991Z",
                                fill: "#FF306E",
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "text-[#ff306e] text-lg font-semibold  tracking-tight",
                              children: "Back",
                            }),
                          ],
                        }),
                        (0, l.jsx)(b.z, {
                          className:
                            "grow h-full shrink basis-0 self-stretch px-6 py-3 bg-[#1b1b1b] rounded-[999px] justify-center items-center gap-2 flex hover:cursor-pointer",
                          children: (0, l.jsx)("div", {
                            className:
                              "text-white text-base font-semibold  leading-normal",
                            children: "Next",
                          }),
                        }),
                      ],
                    }),
                  ],
                });
              },
              fields: ["deploymentType", "template"],
            },
            {
              id: 2,
              label: "Template",
              form: () => {
                let e = (0, y.Gc)().getValues("template"),
                  t = J.find((t) => t.key === e),
                  { previousStep: s } = g(er);
                return (
                  W((e) => e.open),
                  W((e) => e.close),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-10 w-full",
                    children: [
                      "eliza" === e && (0, l.jsx)(O, { ...t }),
                      "eliza" !== e && (0, l.jsx)(X, { ...t }),
                      (0, l.jsxs)("div", {
                        className:
                          "h-14 justify-start items-start gap-6 inline-flex mb-10 md:mb-0",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "w-[180px] h-14 px-6 py-3 rounded-2xl justify-center items-center gap-2 flex hover:cursor-pointer",
                            onClick: () => s(),
                            children: [
                              (0, l.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, l.jsx)("path", {
                                  d: "M11.0452 11.9991L15.5002 16.4541L14.2276 17.7267L8.5 11.9991L14.2276 6.27148L15.5002 7.54408L11.0452 11.9991Z",
                                  fill: "#FF306E",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#ff306e] text-lg font-semibold  tracking-tight",
                                children: "Back",
                              }),
                            ],
                          }),
                          (0, l.jsx)(b.z, {
                            className:
                              "grow h-full shrink basis-0 self-stretch px-6 py-3 bg-[#1b1b1b] rounded-[999px] justify-center items-center gap-2 flex hover:cursor-pointer",
                            children: (0, l.jsx)("div", {
                              className:
                                "text-white text-base font-semibold  leading-normal",
                              children: "Next",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                );
              },
              fields: [
                "aiAgentAge",
                "aiAgentBio",
                "aiAgentPrefixName",
                "aiAgentName",
                "aiAgentGeneralStyle",
                "aiAgentChatStyle",
                "aiAgentPostStyle",
                "aiAgentPostExamples",
                "aiAgentMessageExamples",
                "aiAgentLore",
                "aiAgentAdjectives",
                "aiAgentKnowledge",
                "aiAgentOpenAIKey",
                "aiAgentApiKeyName",
                "aiAgentPrivateKey",
              ],
            },
            {
              id: 3,
              label: "Integration",
              form: () => {
                let { address: e } = (0, $.m)(),
                  {
                    goToStep: t,
                    nextStep: s,
                    previousStep: a,
                    form: n,
                  } = g(er),
                  [i, d] = (0, r.useState)(""),
                  o = (0, Q.o)((e) => e.id),
                  c = (0, Q.o)((e) => e.username);
                return (
                  (0, r.useEffect)(() => {
                    (0, q.N6)(String(e)).then((e) => {
                      200 === e.status && d(e.data.url);
                    });
                  }, []),
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-10",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "h-[130px] flex-col justify-start items-start gap-6 inline-flex",
                        children: [
                          (0, l.jsx)("div", {
                            className:
                              "w-12 h-12  bg-[#fb4ba3] rounded-3xl justify-center items-center gap-2.5 inline-flex",
                            children: (0, l.jsxs)("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "24",
                              height: "24",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: [
                                (0, l.jsxs)("g", {
                                  "clip-path": "url(#clip0_190_1816)",
                                  children: [
                                    (0, l.jsx)("path", {
                                      d: "M22.3525 14.3973L20.9492 12.9941L18.9605 14.9828L20.3638 16.386C21.4603 17.4826 21.4603 19.2672 20.3638 20.3636C19.2674 21.46 17.4828 21.46 16.3862 20.3636L9.01678 12.9941L7.02808 14.9828L14.3975 22.3523C16.5941 24.5488 20.156 24.5488 22.3525 22.3523C24.5491 20.1558 24.5491 16.5938 22.3525 14.3973Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M7.61371 20.3641C6.51709 21.4605 4.73254 21.4605 3.63611 20.3641C2.53967 19.2676 2.53967 17.4831 3.63611 16.3865L11.0056 9.01703L9.01685 7.02832L1.6474 14.3978C-0.549133 16.5943 -0.549133 20.1562 1.6474 22.3528C3.84393 24.5493 7.40588 24.5493 9.60242 22.3528L11.0056 20.9495L9.01685 18.9608L7.61371 20.3641Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M16.3862 3.63611C17.4828 2.53967 19.2674 2.53967 20.3638 3.63611C21.4603 4.73254 21.4603 6.51709 20.3638 7.61371L12.9944 14.9832L14.9831 16.9719L22.3525 9.60242C24.5491 7.40588 24.5491 3.84393 22.3525 1.6474C20.156 -0.549133 16.5941 -0.549133 14.3975 1.6474L12.9944 3.05072L14.9831 5.03943L16.3862 3.63611Z",
                                      fill: "white",
                                    }),
                                    (0, l.jsx)("path", {
                                      d: "M3.05072 11.0056L5.03943 9.01685L3.63611 7.61371C2.53967 6.51709 2.53967 4.73254 3.63611 3.63611C4.73254 2.53967 6.51709 2.53967 7.61371 3.63611L15.2743 11.2967L17.263 9.30798L9.60242 1.6474C7.40588 -0.549133 3.84393 -0.549133 1.6474 1.6474C-0.549133 3.84393 -0.549133 7.40588 1.6474 9.60242L3.05072 11.0056Z",
                                      fill: "white",
                                    }),
                                  ],
                                }),
                                (0, l.jsx)("defs", {
                                  children: (0, l.jsx)("clipPath", {
                                    id: "clip0_190_1816",
                                    children: (0, l.jsx)("rect", {
                                      width: "24",
                                      height: "24",
                                      fill: "white",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className:
                              "flex-col justify-start items-start gap-2 flex",
                            children: (0, l.jsx)("div", {
                              className:
                                "text-[#1b1b1b] md:text-5xl text-4xl font-semibold font-inter",
                              children: "Intergration",
                            }),
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className:
                          "w-full p-5 rounded-2xl border border-[#eaeaea] flex-col justify-start items-around gap-6 inline-flex",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "self-stretch justify-between items-center inline-flex",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#1b1b1b] md:text-xl text-lg font-semibold font-inter",
                                children: "X Intergration",
                              }),
                              (0, l.jsx)(b.z, {
                                type: "button",
                                variant: "ghost",
                                className:
                                  "px-6 py-2 bg-[#eaeaea] rounded-full justify-center items-center gap-2 flex",
                                onClick: () => (
                                  o ||
                                    window.open(
                                      i,
                                      "Integrate-Twitter",
                                      "width=600, height=600"
                                    ),
                                  !1
                                ),
                                children:
                                  i || o
                                    ? (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 20 20",
                                            fill: "none",
                                            children: (0, l.jsx)("path", {
                                              d: "M1.91454 2.5L8.18847 10.7735L1.875 17.5H3.29602L8.82359 11.6107L13.2895 17.5H18.125L11.4979 8.76125L17.3745 2.5H15.9535L10.8631 7.92376L6.75 2.5H1.91454ZM4.00422 3.53247H6.2256L16.0351 16.4678H13.8137L4.00422 3.53247Z",
                                              fill: "#1B1B1B",
                                            }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className:
                                              "text-center text-[#1b1b1b] text-sm font-semibold font-inter leading-tight",
                                            children: c || "Connect",
                                          }),
                                        ],
                                      })
                                    : (0, l.jsx)(Y.Z, {
                                        className: "size-4 animate-spin",
                                      }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "self-stretch justify-between items-center inline-flex",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#1b1b1b] md:text-xl text-lg font-semibold font-inter",
                                children: "Telegram Intergration",
                              }),
                              (0, l.jsxs)(b.z, {
                                onClick: () => {
                                  (0, j.R)(
                                    "error",
                                    "Telegram integration is not available yet"
                                  );
                                },
                                type: "button",
                                variant: "ghost",
                                className:
                                  "px-6 py-2 bg-[#eaeaea] rounded-[999px] justify-center items-center gap-2 flex",
                                children: [
                                  (0, l.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: (0, l.jsx)("path", {
                                      "fill-rule": "evenodd",
                                      "clip-rule": "evenodd",
                                      d: "M10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10C1.25 14.8325 5.16751 18.75 10 18.75ZM13.5183 5.67625C13.9659 5.47972 14.4445 5.87707 14.3666 6.38049L13.2136 13.8288C13.1435 14.2816 12.6615 14.5176 12.2868 14.2827L8.94623 12.1878C8.59808 11.9695 8.54063 11.4638 8.83007 11.1654L11.8138 8.08914C11.9206 7.97904 11.7844 7.80131 11.6594 7.88767L7.51424 10.7514C7.20783 10.9631 6.82786 11.0209 6.47697 10.9092L4.63842 10.3237C4.3055 10.2177 4.28202 9.73146 4.60301 9.59053L13.5183 5.67625Z",
                                      fill: "#1B1B1B",
                                    }),
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "text-center text-[#1b1b1b] text-sm font-semibold font-inter leading-tight",
                                    children: ["Connect", " "],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className:
                              "self-stretch justify-between items-center inline-flex",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#1b1b1b] md:text-xl text-lg font-semibold font-inter",
                                children: "Discord Intergration",
                              }),
                              (0, l.jsxs)(b.z, {
                                type: "button",
                                onClick: () => {
                                  (0, j.R)(
                                    "error",
                                    "Discord integration is not available yet"
                                  );
                                },
                                variant: "ghost",
                                className:
                                  "px-6 py-2 bg-[#eaeaea] rounded-[999px] justify-center items-center gap-2 flex",
                                children: [
                                  (0, l.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: [
                                      (0, l.jsx)("path", {
                                        d: "M6.47975 10.4961C6.47975 11.2215 7.03672 11.8172 7.71588 11.8172C8.40696 11.8172 8.95312 11.2215 8.95201 10.4961C8.9639 9.76962 8.40696 9.17395 7.71588 9.17395C7.02482 9.17395 6.47975 9.77066 6.47975 10.4961Z",
                                        fill: "#1B1B1B",
                                      }),
                                      (0, l.jsx)("path", {
                                        d: "M11.0479 10.4961C11.0479 11.2215 11.6049 11.8172 12.2841 11.8172C12.9751 11.8172 13.5202 11.2215 13.5202 10.4961C13.5321 9.76962 12.9751 9.17395 12.2841 9.17395C11.593 9.17395 11.0479 9.77066 11.0479 10.4961Z",
                                        fill: "#1B1B1B",
                                      }),
                                      (0, l.jsx)("path", {
                                        "fill-rule": "evenodd",
                                        "clip-rule": "evenodd",
                                        d: "M1.65873 3.29754C1.25 4.0997 1.25 5.1498 1.25 7.25V12.75C1.25 14.8502 1.25 15.9003 1.65873 16.7025C2.01825 17.4081 2.59193 17.9817 3.29754 18.3413C4.0997 18.75 5.1498 18.75 7.25 18.75H12.75C14.8502 18.75 15.9003 18.75 16.7025 18.3413C17.4081 17.9817 17.9817 17.4081 18.3413 16.7025C18.75 15.9003 18.75 14.8502 18.75 12.75V7.25C18.75 5.1498 18.75 4.0997 18.3413 3.29754C17.9817 2.59193 17.4081 2.01825 16.7025 1.65873C15.9003 1.25 14.8502 1.25 12.75 1.25H7.25C5.1498 1.25 4.0997 1.25 3.29754 1.65873C2.59193 2.01825 2.01825 2.59193 1.65873 3.29754ZM11.9358 5C12.9308 5.16189 13.8825 5.44625 14.7726 5.83749C16.3288 8.02096 17.1021 10.4836 16.8166 13.324C15.6258 14.1605 14.4708 14.6679 13.3353 15C13.0541 14.6378 12.8053 14.2518 12.5901 13.847C13 13.7007 13.3937 13.5201 13.7657 13.3095C13.6684 13.241 13.5721 13.1694 13.478 13.0957C11.2426 14.0899 8.78441 14.0899 6.52193 13.0957C6.42892 13.1694 6.33267 13.241 6.23425 13.3095C6.6052 13.5191 6.99778 13.6997 7.40766 13.846C7.19244 14.2518 6.94262 14.6368 6.66252 14.999C5.52804 14.6669 4.3741 14.1594 3.18339 13.324C2.94006 10.8738 3.42672 8.38834 5.22199 5.83956C6.11205 5.44728 7.06483 5.16189 8.06089 5C8.18414 5.20756 8.33017 5.48672 8.42857 5.7088C9.46679 5.55936 10.5148 5.55936 11.5725 5.7088C11.6709 5.48672 11.8136 5.20756 11.9358 5Z",
                                        fill: "#1B1B1B",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "text-center text-[#1b1b1b] text-sm font-semibold font-inter leading-tight",
                                    children: ["Connect", " "],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsx)(et, {}),
                      (0, l.jsxs)("div", {
                        className:
                          "h-14 justify-start items-start gap-6 inline-flex mb-10 md:mb-0",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "w-[180px] h-14 px-6 py-3 rounded-2xl justify-center items-center gap-2 flex hover:cursor-pointer",
                            onClick: () => a(),
                            children: [
                              (0, l.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: (0, l.jsx)("path", {
                                  d: "M11.0452 11.9991L15.5002 16.4541L14.2276 17.7267L8.5 11.9991L14.2276 6.27148L15.5002 7.54408L11.0452 11.9991Z",
                                  fill: "#FF306E",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "text-[#ff306e] text-lg font-semibold  tracking-tight",
                                children: "Back",
                              }),
                            ],
                          }),
                          (0, l.jsx)(b.z, {
                            type: "submit",
                            disabled: !o,
                            className:
                              "grow h-full shrink basis-0 self-stretch px-6 py-3 bg-[#1b1b1b] rounded-[999px] justify-center items-center gap-2 flex hover:cursor-pointer",
                            children: (0, l.jsx)("div", {
                              className:
                                "text-white text-base font-semibold  leading-normal",
                              children: "Create Agent",
                            }),
                          }),
                          (0, l.jsx)(ea, {}),
                        ],
                      }),
                    ],
                  })
                );
              },
              fields: ["features"],
            },
          ],
        },
        el,
        {
          deploymentType: "verifiable",
          template: "eliza",
          aiAgentPrefixName: "",
          aiAgentName: "",
          aiAgentBio: "",
          aiAgentLore: "",
          aiAgentTopics: "",
          aiAgentAge: "18",
          aiAgentGeneralStyle: "",
          aiAgentChatStyle: "",
          aiAgentPostStyle: "",
          aiAgentPostExamples: "",
          aiAgentMessageExamples: [{ agentResponse: "", userAsk: "" }],
          aiAgentAdjectives: [],
          aiAgentKnowledge: "",
          aiAgentOpenAIKey: "",
          aiAgentApiKeyName: "",
          aiAgentPrivateKey: "",
          features: [],
        }
      );
      var eo = s(15167);
      let ec = r.forwardRef((e, t) => {
        let {
          className: s,
          orientation: a = "horizontal",
          decorative: n = !0,
          ...i
        } = e;
        return (0, l.jsx)(eo.f, {
          ref: t,
          decorative: n,
          orientation: a,
          className: (0, u.cn)(
            "shrink-0 bg-border",
            "horizontal" === a ? "h-[1px] w-full" : "h-full w-[1px]",
            s
          ),
          ...i,
        });
      });
      function ex(e) {
        let { index: t, context: s } = e,
          { currentStep: a, goToStep: n } = g(s),
          i = Object.create(null);
        return (
          t < a &&
            (i.onClick = () => {
              t < a && n(t);
            }),
          (0, l.jsx)(b.z, {
            type: t == a + 1 ? "submit" : "button",
            role: "tab",
            variant: "ghost",
            className:
              "flex size-10 items-center justify-center rounded-full p-[3.20px]  gap-[3.20px] text-sm font-semibold  leading-tight\n                     ".concat(
                t <= a
                  ? t == a
                    ? "bg-[#ff306e]/10 text-[#ff306e] hover:bg-[#ff306e]/20 hover:text-[#ff306e] "
                    : "bg-[#1fc16b] hover:bg-[#1fc16b]/80 "
                  : "border-2 border-[#aeaeae] text-[#aeaeae] bg-none hover:bg-[#aeaeae]/10 hover:text-[#aeaeae]"
              ),
            ...i,
            children:
              t < a
                ? (0, l.jsx)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, l.jsx)("path", {
                      d: "M6 10.72L8.51429 13.6L14.8 6.40002",
                      stroke: "white",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                  })
                : t + 1,
          })
        );
      }
      function eu(e) {
        let { context: t } = e,
          {
            currentStepLabel: s,
            labels: a,
            currentStep: n,
            goToStep: i,
          } = g(t);
        return (0, l.jsx)("div", {
          className:
            "flex md:justify-between justify-center relative gap-0 md:gap-4",
          children: a.map((e, s, a) =>
            (0, l.jsxs)(
              r.Fragment,
              {
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-col justify-center items-center gap-2",
                    children: [
                      (0, l.jsx)(ex, { index: s, context: t }),
                      (0, l.jsx)("li", {
                        className:
                          "flex flex-col items-center gap-2 flex-shrink-0",
                        children: (0, l.jsx)("span", {
                          className:
                            "text-sm font-semibold\n                 ".concat(
                              s <= n
                                ? s == n
                                  ? " text-[#ff306e]"
                                  : "text-black"
                                : " text-[#aeaeae]",
                              " "
                            ),
                          children: e,
                        }),
                      }),
                    ],
                  }),
                  s < a.length - 1 &&
                    (0, l.jsx)(ec, {
                      className:
                        "flex-1 relative top-[18px] md:max-w-full max-w-[80px] h-1 ".concat(
                          s < n
                            ? s == n - 1
                              ? "bg-[#ff306e]"
                              : "bg-[#1fc16b]"
                            : "bg-[#d8d8d8]"
                        ),
                    }),
                ],
              },
              s
            )
          ),
        });
      }
      ec.displayName = eo.f.displayName;
      var ep = (e) => {
          let { children: t, context: s } = e,
            { form: a, onSubmit: n, onErrors: i } = g(s);
          return (0, l.jsx)(k, {
            ...a,
            children: (0, l.jsx)("form", {
              onSubmit: null == a ? void 0 : a.handleSubmit(n, i),
              className: "w-full",
              children: t,
            }),
          });
        },
        em = s(50024),
        eh = s(84531);
      function ef() {
        return (0, l.jsxs)("div", {
          className:
            "inline-flex h-16 items-center justify-start gap-4 rounded-full bg-white py-2 pl-2.5 pr-5",
          children: [
            (0, l.jsx)("div", {
              className:
                "flex items-center justify-center gap-[5.45px] rounded-[544.91px] py-[13.09px]",
              children: (0, l.jsx)(v.default, {
                src: eh.Z,
                alt: "logo",
                width: 48,
              }),
            }),
            (0, l.jsxs)("div", {
              className:
                "inline-flex flex-col items-start justify-center gap-1",
              children: [
                (0, l.jsx)("div", {
                  className: "inline-flex items-start justify-start gap-3",
                  children: (0, l.jsx)("div", {
                    className:
                      "font-inter text-sm font-semibold leading-tight text-[#1b1b1b]",
                    children: "Nico William",
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "inline-flex items-center justify-start gap-2",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "relative h-6 w-6",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "absolute left-[0.52px] top-0 h-6 w-[22.97px]",
                          children: (0, l.jsx)(v.default, {
                            src: em.Z,
                            alt: "coin",
                            width: 24,
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "absolute left-[7.50px] top-[6.75px] h-[9.75px] w-[9.75px]",
                          children: (0, l.jsx)("div", {
                            className:
                              "absolute left-[-6px] top-[-6px] h-[22.35px] w-[22.35px]",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex items-center justify-start gap-1",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "font-inter text-base font-semibold leading-normal text-[#ff306e]",
                          children: [2, "/", 3],
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "font-inter text-base font-medium leading-normal text-[#ff306e]",
                          children: "Credits",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className:
                "relative h-8 w-8 rounded-full bg-[#ff306e]/10 hover:cursor-pointer hover:bg-[#ff306e]/20",
              children: (0, l.jsxs)("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, l.jsx)("path", {
                    d: "M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z",
                    fill: "#FF306E",
                    fillOpacity: "0.1",
                  }),
                  (0, l.jsx)("path", {
                    d: "M16.0016 9.6001V22.4001M9.60156 16.0001H22.4016",
                    stroke: "#FF306E",
                    "stroke-width": "1.5",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function eg() {
        return (0, l.jsxs)("div", {
          className:
            "w-full items-center flex flex-col px-4 md:px-10 py-6 space-y-8",
          children: [
            (0, l.jsxs)("div", {
              className:
                "h-16 justify-between w-full items-center md:inline-flex hidden",
              children: [
                (0, l.jsxs)("div", {
                  className: "justify-start items-center gap-4 flex",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-8 h-8 justify-center items-center flex",
                      children: (0, l.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        children: [
                          (0, l.jsx)("path", {
                            d: "M17.9065 7.23996V9.02663C14.4132 9.30663 12.4265 11.5466 12.4265 15.24V21.3333H7.23984C4.1865 21.3333 2.6665 19.8133 2.6665 16.76V7.23996C2.6665 4.18663 4.1865 2.66663 7.23984 2.66663H13.3332C16.3865 2.66663 17.9065 4.18663 17.9065 7.23996Z",
                            fill: "#FF306E",
                          }),
                          (0, l.jsx)("path", {
                            d: "M24.7599 10.6666H18.6666C15.6133 10.6666 14.0933 12.1866 14.0933 15.24V24.76C14.0933 27.8133 15.6133 29.3333 18.6666 29.3333H24.7599C27.8133 29.3333 29.3333 27.8133 29.3333 24.76V15.24C29.3333 12.1866 27.8133 10.6666 24.7599 10.6666ZM24.1733 21H22.9999V22.1733C22.9999 22.72 22.5466 23.1733 21.9999 23.1733C21.4533 23.1733 20.9999 22.72 20.9999 22.1733V21H19.8266C19.2799 21 18.8266 20.5466 18.8266 20C18.8266 19.4533 19.2799 19 19.8266 19H20.9999V17.8266C20.9999 17.28 21.4533 16.8266 21.9999 16.8266C22.5466 16.8266 22.9999 17.28 22.9999 17.8266V19H24.1733C24.7199 19 25.1733 19.4533 25.1733 20C25.1733 20.5466 24.7199 21 24.1733 21Z",
                            fill: "#FF306E",
                          }),
                        ],
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-[#1b1b1b] text-2xl font-semibold font-inter",
                      children: "Create Agent",
                    }),
                  ],
                }),
                (0, l.jsx)(ef, {}),
              ],
            }),
            (0, l.jsx)(ed, {
              children: (0, l.jsx)("div", {
                className: "md:w-[720px]",
                children: (0, l.jsx)(eb, {}),
              }),
            }),
          ],
        });
      }
      function eb() {
        let { CurrentForm: e } = g(er);
        return (0, l.jsx)(ep, {
          context: er,
          children: (0, l.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, l.jsx)(eu, { context: er }),
              (0, l.jsx)("div", {
                className:
                  "w-full  md:p-10 p-4 bg-white rounded-[32px] border border-white/5 flex-col justify-start items-start gap-6 inline-flex",
                children: (0, l.jsx)(e, {}),
              }),
            ],
          }),
        });
      }
      var ej = s(49063),
        ev = s(19904),
        ey = s(28920),
        ew = (e) => {
          let { icon: t, title: s } = e,
            a = (0, x.useRouter)();
          return (0, l.jsxs)("main", {
            className:
              "flex px-4 md:px-10 top-0 items-center w-full gap-3 py-8",
            children: [
              (0, l.jsx)(v.default, {
                src: ey.Z,
                alt: "arrow left",
                width: 24,
                className: "hover:cursor-pointer",
                onClick: () => a.push("?type=store"),
              }),
              (0, l.jsx)(v.default, {
                src: t,
                alt: "solana",
                width: 32,
                height: 32,
              }),
              (0, l.jsx)("span", {
                className: "text-[#1B1B1B] md:text-2xl text-sm font-semibold",
                children: s,
              }),
            ],
          });
        },
        eC = () => {
          let e = {
              name: "Bot Assistant",
              image: ej.Z,
              description:
                "A GPT specialized in generating and refining images with a mix of professional and friendly tone.",
            },
            { address: t } = (0, $.m)(),
            s = (0, x.useSearchParams)().get("appId"),
            [a, n] = (0, r.useState)(e),
            [i, d] = (0, r.useState)({ html: "" }),
            [o, c] = (0, r.useState)(""),
            u = (0, x.useRouter)();
          (0, r.useRef)(null);
          let p = (e) => {
            let t = (e) =>
              e
                .replace(/'\s*\+\s*'/g, "")
                .replace(/\\n/g, "\n")
                .replace(/\\"/g, '"')
                .replace(/\\\\/g, "\\");
            try {
              let s = JSON.parse(e);
              if (s && s.html) return { html: t(s.html) };
            } catch (e) {}
            let s = e.match(/```html([\s\S]*?)```/);
            return (s ||
              (s = e.match(
                /<antArtifact[^>]*type="text\/html"[^>]*>([\s\S]*?)<\/antArtifact>/
              )),
            s)
              ? { html: t(s[1].trim()) }
              : { html: "" };
          };
          return ((0, r.useEffect)(() => {
            s &&
              (0, ev.VV)(s)
                .then((e) => {
                  if (200 === e.status) {
                    var t;
                    let s = e.data;
                    n({
                      name: s.title || "Bot Assistant",
                      image: s.logo || ej.Z,
                      description:
                        s.description ||
                        "A GPT specialized in generating and refining images with a mix of professional and friendly tone.",
                    });
                    let a =
                      null ===
                        (t = s.content.find((e) => "assistant" === e.role)) ||
                      void 0 === t
                        ? void 0
                        : t.content;
                    if (a) {
                      console.log("Raw assistant content:", a), c(a);
                      let e = p(a);
                      console.log("Extracted HTML:", e), d(e);
                    }
                  }
                })
                .catch((e) => {
                  console.error("Error fetching dapp:", e);
                });
          }, [s]),
          s)
            ? (t || u.back(),
              (0, l.jsxs)("div", {
                className: "flex flex-col md:gap-8 gap-4 pb-20 w-full",
                children: [
                  (0, l.jsx)(ew, {
                    icon: null == a ? void 0 : a.image,
                    title: null == a ? void 0 : a.name,
                  }),
                  (0, l.jsx)("div", {
                    className:
                      "flex items-center justify-center h-screen w-full p-4",
                    children: o
                      ? (0, l.jsx)("iframe", {
                          className: "w-full h-full border-none",
                          sandbox:
                            "allow-scripts allow-same-origin allow-forms",
                          title: "Custom Application",
                          srcDoc: i.html,
                        })
                      : (0, l.jsx)("div", {
                          role: "status",
                          className:
                            "animate-pulse flex items-center w-full h-full flex-1",
                          children: (0, l.jsx)("div", {
                            className:
                              "flex items-center justify-center w-screen h-screen bg-gray-300 rounded dark:bg-gray-700",
                            children: (0, l.jsx)("span", {
                              className: "sr-only",
                              children: "Loading...",
                            }),
                          }),
                        }),
                  }),
                ],
              }))
            : (0, l.jsx)("div", { children: "wrong id" });
        },
        eA = {
          src: "/_next/static/media/crypto.caaaef0d.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        eN = {
          src: "/_next/static/media/coin.6b4be3a9.svg",
          height: 33,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        ek = (e) => {
          let { value: t, onChange: s, min: a = 0, max: n = 100 } = e,
            i = (0, r.useRef)(null),
            [d, o] = (0, r.useState)(!1),
            c = (e) => {
              if (i.current) {
                let t = i.current.getBoundingClientRect();
                s(
                  Math.round(
                    (Math.min(
                      Math.max(((e.clientX - t.left) / t.width) * 100, 0),
                      100
                    ) /
                      100) *
                      (n - a) +
                      a
                  )
                );
              }
            },
            x = () => {
              o(!1);
            },
            u = (e) => {
              d && c(e);
            };
          (0, r.useEffect)(
            () => (
              d &&
                (window.addEventListener("mousemove", u),
                window.addEventListener("mouseup", x)),
              () => {
                window.removeEventListener("mousemove", u),
                  window.removeEventListener("mouseup", x);
              }
            ),
            [d]
          );
          let p = ((t - a) / (n - a)) * 100;
          return (0, l.jsxs)("div", {
            ref: i,
            className: "relative h-2 mt-4 cursor-pointer w-full",
            onMouseDown: (e) => {
              o(!0), c(e);
            },
            children: [
              (0, l.jsx)("div", {
                className: "absolute w-full h-full bg-gray-200 rounded-full",
              }),
              (0, l.jsx)("div", {
                className: "absolute h-full bg-black rounded-full",
                style: { width: "".concat(p, "%") },
              }),
              (0, l.jsx)("div", {
                className:
                  "absolute w-[30px] h-[30px] -mt-[13px] bg-white rounded-full shadow-lg cursor-grab active:cursor-grabbing transform -translate-x-1/2 flex items-center justify-center",
                style: { left: "".concat(p, "%") },
                onMouseDown: (e) => {
                  e.stopPropagation(), o(!0);
                },
                children: (0, l.jsx)("div", {
                  className: "w-4 h-4 bg-[#FF306E] rounded-full",
                }),
              }),
            ],
          });
        },
        eB = s(468),
        eF = s(70899);
      let eE = [
        {
          anonymous: !1,
          inputs: [
            {
              indexed: !0,
              internalType: "address",
              name: "tokenAddress",
              type: "address",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "tokenName",
              type: "string",
            },
            {
              indexed: !1,
              internalType: "string",
              name: "tokenSymbol",
              type: "string",
            },
          ],
          name: "TokenDeployed",
          type: "event",
        },
        {
          inputs: [],
          name: "deployFee",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              components: [
                { internalType: "string", name: "name", type: "string" },
                { internalType: "string", name: "symbol", type: "string" },
                {
                  internalType: "address",
                  name: "marketingFeeReceiver",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "devFeeReceiver",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "marketingTaxBuy",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "marketingTaxSell",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "devTaxSell",
                  type: "uint256",
                },
                { internalType: "uint256", name: "devTaxBuy", type: "uint256" },
                { internalType: "uint256", name: "lpTaxBuy", type: "uint256" },
                { internalType: "uint256", name: "lpTaxSell", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "totalSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxPercentageForWallet",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "maxPercentageForTx",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "swapRouter",
                  type: "address",
                },
                { internalType: "address", name: "newOwner", type: "address" },
              ],
              internalType: "struct WLIStandardToken.TokenInfo",
              name: "_tokenInfo",
              type: "tuple",
            },
          ],
          name: "deployToken",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
        {
          inputs: [],
          name: "withdraw",
          outputs: [],
          stateMutability: "payable",
          type: "function",
        },
      ];
      var eM = s(64113),
        eT = () => {
          let { isDisconnected: e } = (0, $.m)(),
            { writeContract: t, isPending: s, data: a, error: n } = (0, eB.S)(),
            { isLoading: i, isSuccess: d } = (0, eF.A)({ hash: a });
          (0, r.useEffect)(() => {
            let e = null == n ? void 0 : n.cause;
            if (e) {
              var t;
              (null == e
                ? void 0
                : null === (t = e.cause) || void 0 === t
                ? void 0
                : t.code) == 4001
                ? (0, j.R)("error", "Transaction rejected")
                : (0, j.R)("error", "Failed to deploy token");
            }
          }, [n]);
          let [o, c] = (0, r.useState)({
              network: "Ethereum Mainnet",
              tokenName: "",
              tokenSymbol: "",
              totalSupply: "1000",
              marketingWallet: "",
              devWallet: "",
              marketingBuyFee: "",
              devBuyFee: "",
              lpBuyFee: "",
              buyFee: "0",
              marketingSellFee: "",
              devSellFee: "",
              lpSellFee: "",
              sellFee: "0",
              totalFee: "0",
              maxTransactionAmount: 50,
              maxWalletAmount: 50,
            }),
            x = (e) => {
              let { name: t, value: s } = e.target;
              c((e) => ({ ...e, [t]: s }));
            },
            u = (e) => {
              let { name: t, value: s } = e.target;
              if ("" === s) {
                c((e) => ({ ...e, [t]: s }));
                return;
              }
              if (!/^\d*$/.test(s)) return;
              let a = parseInt(s);
              isNaN(a) ||
                ((a = Math.min(100, Math.max(0, a))),
                c((e) => ({ ...e, [t]: a })));
            },
            p = async (e) => {
              if ((e.preventDefault(), console.log(o), !t)) return;
              let s = {
                name: o.tokenName,
                symbol: o.tokenSymbol,
                marketingFeeReceiver: o.marketingWallet,
                devFeeReceiver: o.devWallet,
                marketingTaxBuy: BigInt(o.marketingBuyFee),
                marketingTaxSell: BigInt(o.marketingSellFee),
                devTaxSell: BigInt(o.devSellFee),
                devTaxBuy: BigInt(o.devBuyFee),
                lpTaxBuy: BigInt(o.lpBuyFee),
                lpTaxSell: BigInt(o.lpSellFee),
                totalSupply: BigInt(o.totalSupply),
                maxPercentageForWallet: BigInt(o.maxWalletAmount),
                maxPercentageForTx: BigInt(o.maxTransactionAmount),
                swapRouter: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
                newOwner: o.marketingWallet,
              };
              try {
                t({
                  address: "0x464caD574fB4dc0BA72e01f99e59A5f09F3B15Cc",
                  abi: eE,
                  functionName: "deployToken",
                  args: [s],
                }),
                  (0, j.R)("update", "Token deployment initiated");
              } catch (e) {
                console.error("Error:", e),
                  (0, j.R)("error", "Failed to deploy token");
              }
            },
            m = [
              { title: "Network", value: o.network },
              { title: "Router", value: "Uniswap V2" },
              { title: "Token Name", value: o.tokenName },
              { title: "Symbol", value: o.tokenSymbol },
              { title: "Total Supply", value: o.totalSupply },
              { title: "Marketing Wallet", value: o.marketingWallet },
              { title: "Dev Wallet", value: o.devWallet },
              { title: "Marketing Buy Fee", value: o.marketingBuyFee },
              { title: "Dev Buy Fee", value: o.devBuyFee },
              { title: "LP Buy Fee", value: o.lpBuyFee },
              { title: "Buy Fee", value: o.buyFee },
              { title: "Marketing Sell Fee", value: o.marketingSellFee },
              { title: "Dev Sell Fee", value: o.devSellFee },
              { title: "LP Sell Fee", value: o.lpSellFee },
              { title: "Sell Fee", value: o.sellFee },
              { title: "Total Fee", value: o.totalFee },
              {
                title: "Max Transaction Amount",
                value: o.maxTransactionAmount,
              },
              { title: "Max Wallet Amount", value: o.maxWalletAmount },
            ],
            h = () =>
              !!(
                o.tokenName &&
                o.tokenSymbol &&
                o.totalSupply &&
                o.marketingWallet &&
                o.devWallet &&
                o.marketingBuyFee &&
                o.devBuyFee &&
                o.lpBuyFee &&
                o.marketingSellFee &&
                o.devSellFee &&
                o.lpSellFee &&
                o.totalFee &&
                o.maxTransactionAmount &&
                o.maxWalletAmount &&
                (0, eM.U)(o.marketingWallet) &&
                (0, eM.U)(o.devWallet)
              );
          return (0, l.jsxs)("div", {
            className: "flex flex-col md:gap-8 gap-4 pb-20",
            children: [
              (0, l.jsx)(ew, {
                icon: eA,
                title: "Deploy ERC20 Token on ETH Network",
              }),
              (0, l.jsxs)("div", {
                className: "flex items-center gap-4 md:px-20 px-4",
                children: [
                  (0, l.jsx)(v.default, {
                    src: eN,
                    alt: "coin",
                    width: 32,
                    height: 32,
                  }),
                  (0, l.jsx)("h1", {
                    className:
                      "text-[#1B1B1B] md:text-[32px] text-lg font-semibold",
                    children: "Create Token",
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full flex mx-auto md:flex-row flex-col gap-8 py-6 md:px-10 px-4",
                children: [
                  (0, l.jsxs)("form", {
                    onSubmit: p,
                    className: "space-y-8 md:min-w-[696px]",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "block text-sm font-medium text-[#1B1B1B]",
                            children: "Network",
                          }),
                          (0, l.jsxs)("div", {
                            className: "relative",
                            children: [
                              (0, l.jsx)("select", {
                                className:
                                  "w-full p-3 bg-white border border-gray-200 rounded-2xl appearance-none cursor-pointer pr-10 pl-10 text-gray-900",
                                defaultValue: "Ethereum Mainnet",
                                children: (0, l.jsx)("option", {
                                  value: "Ethereum Mainnet",
                                  className: "flex items-center",
                                  children: "Ethereum Mainnet",
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
                                children: (0, l.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  children: (0, l.jsx)("path", {
                                    d: "M12 21C7.0293 21 3 16.9707 3 12C3 7.0293 7.0293 3 12 3C16.9707 3 21 7.0293 21 12C21 16.9707 16.9707 21 12 21ZM9.939 18.9003C9.05107 17.0169 8.53668 14.9792 8.4243 12.9H4.8558C5.03093 14.285 5.60453 15.5893 6.50691 16.6545C7.40929 17.7197 8.60161 18.4999 9.939 18.9003ZM10.227 12.9C10.3629 15.0951 10.9902 17.157 12 18.9768C13.0371 17.1089 13.6429 15.0325 13.773 12.9H10.227ZM19.1442 12.9H15.5757C15.4633 14.9792 14.9489 17.0169 14.061 18.9003C15.3984 18.4999 16.5907 17.7197 17.4931 16.6545C18.3955 15.5893 18.9691 14.285 19.1442 12.9ZM4.8558 11.1H8.4243C8.53668 9.02081 9.05107 6.98312 9.939 5.0997C8.60161 5.50009 7.40929 6.28028 6.50691 7.34547C5.60453 8.41065 5.03093 9.71499 4.8558 11.1ZM10.2279 11.1H13.7721C13.6423 8.96754 13.0368 6.89118 12 5.0232C10.9629 6.8911 10.3571 8.96747 10.227 11.1H10.2279ZM14.061 5.0997C14.9489 6.98312 15.4633 9.02081 15.5757 11.1H19.1442C18.9691 9.71499 18.3955 8.41065 17.4931 7.34547C16.5907 6.28028 15.3984 5.50009 14.061 5.0997Z",
                                    fill: "#1B1B1B",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className:
                                  "absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none",
                                children: (0, l.jsx)("svg", {
                                  className: "w-5 h-5 text-gray-400",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, l.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "text-[#FF306E] text-sm font-semibold",
                            children: "Token Information",
                          }),
                          (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: [
                                      "Name",
                                      (0, l.jsx)("span", {
                                        className: "text-[#FB3748]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "tokenName",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] bg-white shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)]",
                                    placeholder: "Token name",
                                    value: o.tokenName,
                                    onChange: x,
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: [
                                      "Symbol",
                                      (0, l.jsx)("span", {
                                        className: "text-[#FB3748]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "tokenSymbol",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                    placeholder: "Token Symbol (BNB)",
                                    value: o.tokenSymbol,
                                    onChange: x,
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: [
                                      "Total Supply",
                                      (0, l.jsx)("span", {
                                        className: "text-[#FB3748]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "totalSupply",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                    placeholder: "Min 1000",
                                    value: o.totalSupply,
                                    onChange: x,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "text-[#FF306E] text-sm font-semibold",
                            children: "Wallet Information",
                          }),
                          (0, l.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: [
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: [
                                      "Marketing Wallet",
                                      (0, l.jsx)("span", {
                                        className: "text-[#FB3748]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "marketingWallet",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                    placeholder: "0x...",
                                    value: o.marketingWallet,
                                    onChange: x,
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsxs)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: [
                                      "Dev Wallet",
                                      (0, l.jsx)("span", {
                                        className: "text-[#FB3748]",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "devWallet",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                    placeholder: "0x...",
                                    value: o.devWallet,
                                    onChange: x,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "text-[#FF306E] text-sm font-semibold",
                            children: "Wallet Information",
                          }),
                          (0, l.jsxs)("div", {
                            className: "space-y-6",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-4 gap-4",
                                children: [
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "Marketing Buy Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "marketingBuyFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.marketingBuyFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "Dev Buy Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "devBuyFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.devBuyFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "LP Buy Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "lpBuyFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.lpBuyFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: "Buy Fee",
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "buyFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        value: o.buyFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-4 gap-4",
                                children: [
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "Marketing Sell Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "marketingSellFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.marketingSellFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "Dev Sell Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "devSellFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.devSellFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsxs)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: [
                                          "LP Sell Fee",
                                          (0, l.jsx)("span", {
                                            className: "text-[#FB3748]",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "lpSellFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white",
                                        placeholder: "0-15%",
                                        value: o.lpSellFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    children: [
                                      (0, l.jsx)("label", {
                                        className:
                                          "block text-sm text-[#1B1B1B] font-medium mb-1",
                                        children: "Sell Fee",
                                      }),
                                      (0, l.jsx)("input", {
                                        type: "text",
                                        name: "sellFee",
                                        className:
                                          "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white ",
                                        value: o.sellFee,
                                        onChange: x,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                children: [
                                  (0, l.jsx)("label", {
                                    className:
                                      "block text-sm text-[#1B1B1B] font-medium mb-1",
                                    children: "Total Fee",
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "totalFee",
                                    className:
                                      "w-full p-4 border rounded-xl border-[#EAEAEA] shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] bg-white ",
                                    value: o.totalFee,
                                    onChange: x,
                                  }),
                                  (0, l.jsx)("p", {
                                    className: "text-xs text-gray-500 mt-1",
                                    children:
                                      "*Buy Fee + Sell Fee amount must be between 0 - 30",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                          (0, l.jsx)("h3", {
                            className: "text-[#FF306E] text-sm font-semibold",
                            children: "Token Configs",
                          }),
                          (0, l.jsx)("div", {
                            className: "space-y-4",
                            children: (0, l.jsxs)("div", {
                              children: [
                                (0, l.jsxs)("label", {
                                  className:
                                    "block text-sm text-[#1B1B1B] font-medium mb-1",
                                  children: [
                                    "Max Transaction Amount",
                                    (0, l.jsx)("span", {
                                      className: "text-[#FB3748]",
                                      children: "*",
                                    }),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "flex items-center w-full gap-4",
                                  children: [
                                    (0, l.jsx)(ek, {
                                      value: o.maxTransactionAmount,
                                      onChange: (e) =>
                                        c((t) => ({
                                          ...t,
                                          maxTransactionAmount: Math.round(e),
                                        })),
                                    }),
                                    (0, l.jsx)("input", {
                                      type: "text",
                                      name: "maxTransactionAmount",
                                      value: o.maxTransactionAmount,
                                      onChange: u,
                                      className:
                                        "p-4 shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] max-w-[70px] bg-[#FAFAFA] border border-[#D8D8D8] rounded-2xl",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, l.jsxs)("div", {
                            children: [
                              (0, l.jsxs)("label", {
                                className:
                                  "block text-sm text-[#1B1B1B] font-medium mb-1",
                                children: [
                                  "Max Wallet Amount",
                                  (0, l.jsx)("span", {
                                    className: "text-[#FB3748]",
                                    children: "*",
                                  }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "flex items-center w-full gap-4",
                                children: [
                                  (0, l.jsx)(ek, {
                                    value: o.maxWalletAmount,
                                    onChange: (e) =>
                                      c((t) => ({ ...t, maxWalletAmount: e })),
                                  }),
                                  (0, l.jsx)("input", {
                                    type: "text",
                                    name: "maxWalletAmount",
                                    value: o.maxWalletAmount,
                                    onChange: u,
                                    className:
                                      "p-4 shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] max-w-[70px] bg-[#FAFAFA] border border-[#D8D8D8] rounded-2xl",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("section", {
                    className:
                      "bg-[#FFF] rounded-2xl py-6 px-4 w-full h-fit flex flex-col gap-10",
                    children: [
                      (0, l.jsxs)("div", {
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-[#666666] text-xs",
                            children: "Contract Summary",
                          }),
                          (0, l.jsx)("h1", {
                            className: "text-[#FF306E] text-xl font-semibold",
                            children: "Tax Contract",
                          }),
                        ],
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: m.map((e, t) =>
                          (0, l.jsxs)(
                            "div",
                            {
                              className: "flex justify-between",
                              children: [
                                (0, l.jsx)("span", {
                                  className:
                                    "text-[#1B1B1B] flex-1 font-semibold text-sm",
                                  children: e.title,
                                }),
                                (0, l.jsx)("span", {
                                  className: "text-[#666666] flex-1 text-sm",
                                  children: e.value || "--",
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                      (0, l.jsx)("button", {
                        onClick: p,
                        disabled: !h() || e || s || i,
                        className:
                          "\n        hover:scale-105 transition-all duration-300 ease-in-out\n        bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] p-[2px] w-full rounded-full ".concat(
                            !h() || e || s || i
                              ? "opacity-50 cursor-not-allowed"
                              : ""
                          ),
                        children: (0, l.jsx)("div", {
                          className:
                            "flex items-center justify-center rounded-full px-8 py-1.5 bg-[#1B1B1B] text-white gap-2",
                          children: (0, l.jsx)("span", {
                            children: s
                              ? "Confirming..."
                              : i
                              ? "Deploying..."
                              : d
                              ? "Deployed!"
                              : "Deploy",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        eS = s(65364),
        eL = s(9450),
        e_ = s(84147),
        eD = s(40932),
        eZ = s(56298),
        eH = s(44355),
        eR = s(49178),
        eV = {
          src: "/_next/static/media/agent.e4e7aaa0.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        };
      function eW(e) {
        let t = new Date(e),
          s = (e) => e.toString().padStart(2, "0"),
          a = t.getHours(),
          n = s(t.getMinutes()),
          l = a >= 12 ? "PM" : "AM";
        a %= 12;
        let i = s((a = a || 12)),
          r = s(t.getDate()),
          d = s(t.getMonth() + 1),
          o = t.getFullYear();
        return ""
          .concat(r, "/")
          .concat(d, "/")
          .concat(o, " ")
          .concat(i, ":")
          .concat(n, " ")
          .concat(l);
      }
      var eI = (e) => {
        let { key: t, agentData: s } = e,
          a = (0, x.useRouter)();
        return (0, l.jsxs)("div", {
          className:
            "py-6 px-4 rounded-2xl bg-[#FFF] flex flex-col gap-6 max-w-[352px] w-full",
          children: [
            (0, l.jsx)(v.default, { src: eV, alt: "Agent" }),
            (0, l.jsxs)("div", {
              className: "flex flex-col gap-3",
              children: [
                (0, l.jsx)("h1", {
                  className: "text-2xl text-[#1B1B1B] font-semibold",
                  children: s.character.name,
                }),
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    (0, l.jsxs)("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      width: "20",
                      height: "20",
                      viewBox: "0 0 20 20",
                      fill: "none",
                      children: [
                        (0, l.jsxs)("g", {
                          clipPath: "url(#clip0_16074_3576)",
                          children: [
                            (0, l.jsx)("path", {
                              d: "M13.7506 10.8335C14.2109 10.8335 14.584 10.4604 14.584 10.0002C14.584 9.53992 14.2109 9.16683 13.7506 9.16683H10.834V4.5835C10.834 4.12326 10.4609 3.75016 10.0007 3.75016C9.54041 3.75016 9.16732 4.12326 9.16732 4.5835V10.0002C9.16732 10.4604 9.54041 10.8335 10.0007 10.8335H13.7506Z",
                              fill: "#AEAEAE",
                            }),
                            (0, l.jsx)("path", {
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                              d: "M10.0007 0.833496C4.93804 0.833496 0.833984 4.93755 0.833984 10.0002C0.833984 15.0628 4.93804 19.1668 10.0007 19.1668C15.0633 19.1668 19.1673 15.0628 19.1673 10.0002C19.1673 4.93755 15.0633 0.833496 10.0007 0.833496ZM2.50065 10.0002C2.50065 5.85803 5.85851 2.50016 10.0007 2.50016C14.1428 2.50016 17.5006 5.85803 17.5006 10.0002C17.5006 14.1423 14.1428 17.5002 10.0007 17.5002C5.85851 17.5002 2.50065 14.1423 2.50065 10.0002Z",
                              fill: "#AEAEAE",
                            }),
                          ],
                        }),
                        (0, l.jsx)("defs", {
                          children: (0, l.jsx)("clipPath", {
                            id: "clip0_16074_3576",
                            children: (0, l.jsx)("rect", {
                              width: "20",
                              height: "20",
                              fill: "white",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("span", {
                      className: "text-base text-[#AEAEAE] font-medium",
                      children: eW(s.created_at),
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "border border-[#1FC16B] w-fit px-4 py-1 rounded-full bg-[#E0FAEC] flex gap-1 items-center",
              children: [
                (0, l.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  children: (0, l.jsx)("path", {
                    d: "M10.3606 11.0269C10.2295 11.0264 10.1014 10.9874 9.99239 10.9146C9.88337 10.8417 9.79824 10.7384 9.74765 10.6174C9.69706 10.4965 9.68326 10.3633 9.70797 10.2345C9.73269 10.1058 9.79482 9.98715 9.8866 9.89352C10.3866 9.39105 10.6673 8.71104 10.6673 8.00218C10.6673 7.29333 10.3866 6.61332 9.8866 6.11085C9.76568 5.98447 9.69927 5.81562 9.7017 5.64073C9.70412 5.46583 9.77519 5.29889 9.89957 5.17591C10.0239 5.05293 10.1917 4.98376 10.3666 4.98331C10.5415 4.98286 10.7096 5.05118 10.8346 5.17352C11.5815 5.92549 12.0006 6.94233 12.0006 8.00218C12.0006 9.06204 11.5815 10.0789 10.8346 10.8309C10.7724 10.8932 10.6986 10.9426 10.6172 10.9763C10.5358 11.0099 10.4486 11.0271 10.3606 11.0269ZM6.10926 10.8342C6.23495 10.7099 6.30613 10.5407 6.30713 10.364C6.30813 10.1872 6.23887 10.0172 6.1146 9.89152C5.61459 9.38905 5.3339 8.70904 5.3339 8.00019C5.3339 7.29133 5.61459 6.61132 6.1146 6.10885C6.17782 6.04697 6.2281 5.97313 6.2625 5.89162C6.2969 5.81011 6.31474 5.72257 6.31496 5.6341C6.31519 5.54563 6.29781 5.458 6.26382 5.37632C6.22984 5.29464 6.17994 5.22053 6.11703 5.15833C6.05412 5.09613 5.97946 5.04707 5.89739 5.01401C5.81533 4.98096 5.72751 4.96457 5.63905 4.96579C5.55059 4.96702 5.46326 4.98584 5.38214 5.02116C5.30103 5.05648 5.22776 5.10759 5.1666 5.17152C4.41972 5.92349 4.00055 6.94033 4.00055 8.00019C4.00055 9.06004 4.41972 10.0769 5.1666 10.8289C5.29091 10.9545 5.46005 11.0257 5.63683 11.0267C5.8136 11.0277 5.98354 10.9585 6.10926 10.8342ZM12.9553 12.4475C14.0572 11.2283 14.6672 9.64352 14.6672 8.00019C14.6672 6.35685 14.0572 4.77203 12.9553 3.55285C12.8366 3.42175 12.6708 3.34314 12.4942 3.33433C12.3176 3.32551 12.1447 3.38721 12.0136 3.50585C11.8825 3.62449 11.8039 3.79035 11.7951 3.96695C11.7863 4.14355 11.848 4.31641 11.9666 4.44752C12.8466 5.42153 13.3338 6.6875 13.3338 8.00019C13.3338 9.31287 12.8466 10.5788 11.9666 11.5529C11.848 11.684 11.7863 11.8568 11.7951 12.0334C11.8039 12.21 11.8825 12.3759 12.0136 12.4945C12.1447 12.6132 12.3176 12.6749 12.4942 12.666C12.6708 12.6572 12.8366 12.5786 12.9553 12.4475ZM3.98726 12.4942C4.11832 12.3756 4.19693 12.2098 4.2058 12.0333C4.21468 11.8568 4.1531 11.684 4.0346 11.5529C3.15457 10.5788 2.66737 9.31287 2.66737 8.00019C2.66737 6.6875 3.15457 5.42153 4.0346 4.44752C4.09334 4.3826 4.13872 4.30675 4.16816 4.22429C4.19759 4.14184 4.21049 4.05439 4.20612 3.96695C4.20176 3.87951 4.18021 3.79378 4.14272 3.71467C4.10522 3.63555 4.05251 3.5646 3.9876 3.50585C3.92268 3.44711 3.84683 3.40172 3.76437 3.37229C3.68192 3.34286 3.59447 3.32996 3.50703 3.33433C3.33043 3.34314 3.16457 3.42175 3.04593 3.55285C1.94404 4.77203 1.33398 6.35685 1.33398 8.00019C1.33398 9.64352 1.94404 11.2283 3.04593 12.4475C3.1646 12.5785 3.33042 12.657 3.50694 12.6657C3.68345 12.6745 3.85622 12.6128 3.98726 12.4942ZM8.0006 7.00018C7.80282 7.00018 7.60948 7.05883 7.44503 7.16872C7.28058 7.2786 7.15241 7.43478 7.07672 7.6175C7.00103 7.80023 6.98123 8.00129 7.01981 8.19528C7.0584 8.38926 7.15364 8.56744 7.29349 8.70729C7.43334 8.84714 7.61153 8.94238 7.80551 8.98097C7.99949 9.01956 8.20055 8.99975 8.38328 8.92406C8.56601 8.84838 8.72219 8.7202 8.83207 8.55575C8.94195 8.39131 9.0006 8.19797 9.0006 8.00019C9.0006 7.73497 8.89524 7.48061 8.7077 7.29308C8.52017 7.10554 8.26581 7.00018 8.0006 7.00018Z",
                    fill: "#1FC16B",
                  }),
                }),
                (0, l.jsx)("span", {
                  className: "text-[#1FC16B] text-sm font-semibold",
                  children: "Running",
                }),
              ],
            }),
            (0, l.jsxs)("button", {
              onClick: () => {
                a.push("?type=view-agent&id=".concat(s.id));
              },
              className:
                "border mb-4 border-[rgba(255,48,110,0.50)] rounded-full w-full py-[6px] flex items-center justify-center gap-2  hover:scale-105 transition-all duration-300 ease-in-out",
              children: [
                (0, l.jsxs)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "17",
                  height: "16",
                  viewBox: "0 0 17 16",
                  fill: "none",
                  children: [
                    (0, l.jsx)("path", {
                      d: "M6.5 10L10.5 6M10.5 6H7.5M10.5 6V9",
                      stroke: "#FF306E",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    (0, l.jsx)("path", {
                      d: "M1.83301 8.00001C1.83301 4.85731 1.83301 3.28597 2.80932 2.30965C3.78563 1.33334 5.35698 1.33334 8.49967 1.33334C11.6424 1.33334 13.2137 1.33334 14.19 2.30965C15.1663 3.28597 15.1663 4.85731 15.1663 8.00001C15.1663 11.1427 15.1663 12.7141 14.19 13.6904C13.2137 14.6667 11.6424 14.6667 8.49967 14.6667C5.35698 14.6667 3.78563 14.6667 2.80932 13.6904C1.83301 12.7141 1.83301 11.1427 1.83301 8.00001Z",
                      stroke: "#FF306E",
                    }),
                  ],
                }),
                (0, l.jsx)("span", {
                  className: "text-sm font-semibold text-[#FF306E]",
                  children: "View Agent",
                }),
              ],
            }),
          ],
        });
      };
      function eP() {
        let { title: e } = (0, eR.t)(),
          {
            address: t,
            isConnected: s,
            isConnecting: a,
            isReconnecting: n,
            isDisconnected: i,
          } = (0, $.m)(),
          d = (0, x.useRouter)(),
          o = async () => await (0, q._z)(null != t ? t : "0x1");
        (0, r.useEffect)(() => {
          "" === e && t && h();
        }, [e]);
        let {
          data: c,
          isLoading: u,
          isError: p,
          isSuccess: m,
          refetch: h,
        } = (0, eD.a)({
          queryKey: ["my-agents", "all"],
          queryFn: o,
          placeholderData: eZ.Wk,
          gcTime: 3e4,
          enabled: !!t,
        });
        return (0, l.jsxs)("div", {
          className:
            "w-full flex flex-col pb-20 md:pb-0 animate-slide-in-right h-[calc(100vh-50px)] overflow-y-auto standard-scroll ",
          children: [
            (0, l.jsxs)("div", {
              className: "md:flex justify-between md:px-10 px-4",
              children: [
                (0, l.jsxs)("h1", {
                  className:
                    "flex items-center justify-start gap-4 font-semibold text-[32px] leading-normal tracking-[-0.8px] text-[#1b1b1b] h-16 ",
                  children: [
                    (0, l.jsx)(v.default, {
                      src: eS.Z,
                      alt: "Explore",
                      width: 32,
                      height: 32,
                    }),
                    (0, l.jsx)("span", { children: "My Agent" }),
                  ],
                }),
                (0, l.jsx)(eH.Z, {}),
              ],
            }),
            (0, l.jsx)("div", {
              className: "flex flex-wrap gap-4 w-full mt-8 md:px-10 px-4 ",
              children:
                s &&
                m &&
                null !== c &&
                "object" == typeof c &&
                (null == c ? void 0 : c.data.length) > 0 &&
                (null == c
                  ? void 0
                  : c.data.map((e) => (0, l.jsx)(eI, { agentData: e }, e.id))),
            }),
            (null === c || (null == c ? void 0 : c.data.length) === 0 || i) &&
              (0, l.jsxs)("div", {
                className:
                  "w-full   h-[calc(100vh-64px-32px-48px)] mt-8  flex flex-col items-center justify-center ",
                children: [
                  (0, l.jsx)("div", {
                    className: "relative w-[177.5px] h-[175.5px] mb-8 ",
                    children: (0, l.jsx)(v.default, {
                      src: eL.Z,
                      alt: "No App",
                      fill: !0,
                      style: { objectFit: "contain" },
                    }),
                  }),
                  (0, l.jsx)("p", {
                    className:
                      "text-[16px] leading-[24px] tracking-[-0.16px] text-primary-black font-semibold mb-5",
                    children: i
                      ? "You haven't logged in!"
                      : "You haven’t created any agents!",
                  }),
                  !i &&
                    (0, l.jsx)("button", {
                      onClick: () => d.push("?type=create-agent"),
                      className:
                        "hover:scale-105 transition-all duration-300 ease-in-out rounded-full p-1 bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] bg-opacity-20",
                      children: (0, l.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 px-10 py-3 rounded-full bg-primary-black text-white ",
                        children: [
                          (0, l.jsx)(v.default, {
                            src: e_.Z,
                            alt: "Create",
                            width: 16,
                            height: 16,
                          }),
                          (0, l.jsx)("span", {
                            className:
                              "text-[16px] leading-none font-semibold font-neueHass",
                            children: "Create",
                          }),
                        ],
                      }),
                    }),
                ],
              }),
          ],
        });
      }
      var ez = s(45429),
        eU = s(46124),
        eK = s.n(eU),
        eG = s(55211),
        eO = s(37346);
      eG.kL.register(eG.jn, eG.od, eG.uw, eG.f$, eG.Dx, eG.u, eG.De);
      var eX = () =>
          (0, l.jsx)("div", {
            style: { height: "100vh" },
            children: (0, l.jsx)(eO.x1, {
              data: {
                labels: [
                  "Jul 2019",
                  "Oct 2019",
                  "Jan 2020",
                  "Apr 2020",
                  "Jul 2020",
                  "Oct 2020",
                  "Jan 2021",
                  "Apr 2021",
                  "Jul 2021",
                  "Oct 2021",
                  "Jan 2022",
                  "Apr 2022",
                  "Jul 2022",
                  "Oct 2022",
                  "Jan 2023",
                  "Apr 2023",
                  "Jul 2023",
                  "Oct 2023",
                  "Jan 2024",
                  "Apr 2024",
                  "Jul 2024",
                  "Oct 2024",
                ],
                datasets: [
                  {
                    label: "Alts Signal",
                    data: [
                      0.8, 0.7, 0.65, 0.5, 0.6, 0.7, 0.8, 0.7, 0.6, 0.55, 0.45,
                      0.4, 0.5, 0.6, 0.7, 0.8, 0.75, 0.6, 0.55, 0.45, 0.4, 0.35,
                    ],
                    borderColor: "yellow",
                    backgroundColor: "rgba(255, 223, 0, 0.2)",
                    borderWidth: 2,
                    yAxisID: "y",
                    tension: 0.3,
                  },
                  {
                    label: "BTC Price",
                    data: [
                      10085, 9150, 9350, 8658, 11351, 13780, 33141, 57750,
                      41490, 61318, 38483, 37640, 23336, 20489, 23134, 29228,
                      29231, 34654, 42894, 66245, 1e5, 95e3,
                    ],
                    borderColor: "gray",
                    backgroundColor: "rgba(128, 128, 128, 0.2)",
                    borderWidth: 2,
                    yAxisID: "y1",
                    tension: 0.3,
                  },
                  {
                    label: "Buy a House",
                    data: [
                      0.9, 0.88, 0.85, 0.87, 0.89, 0.91, 0.92, 0.93, 0.94, 0.9,
                      0.88, 0.87, 0.85, 0.86, 0.88, 0.9, 0.92, 0.94, 0.95, 0.91,
                      0.89, 0.9,
                    ],
                    borderColor: "red",
                    borderWidth: 2,
                    borderDash: [10, 5],
                    yAxisID: "y",
                  },
                  {
                    label: "Sell Your House",
                    data: [
                      0.1, 0.12, 0.15, 0.13, 0.11, 0.09, 0.08, 0.07, 0.06, 0.1,
                      0.12, 0.13, 0.15, 0.14, 0.12, 0.1, 0.08, 0.06, 0.05, 0.09,
                      0.11, 0.1,
                    ],
                    borderColor: "green",
                    borderWidth: 2,
                    borderDash: [10, 5],
                    yAxisID: "y",
                  },
                ],
              },
              options: {
                responsive: !0,
                maintainAspectRatio: !1,
                plugins: {
                  legend: { position: "top" },
                  tooltip: {
                    callbacks: {
                      title: (e) => "Date: ".concat(e[0].label),
                      label: (e) =>
                        "".concat(e.dataset.label, ": ").concat(e.raw),
                    },
                  },
                  title: { display: !0, text: "Alts Buy Signal Timeline" },
                },
                scales: {
                  x: {
                    grid: { display: !0 },
                    title: { display: !0, text: "Timeline" },
                  },
                  y: {
                    type: "linear",
                    position: "left",
                    min: 0,
                    max: 1,
                    title: { display: !0, text: "Signal Strength" },
                  },
                  y1: {
                    type: "linear",
                    position: "right",
                    min: 0,
                    max: 12e4,
                    grid: { drawOnChartArea: !1 },
                    title: { display: !0, text: "BTC Price (USD)" },
                  },
                },
              },
            }),
          }),
        eJ = () => (
          (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 12,
              t = () => {
                let e = new Date("2024-12-15"),
                  t = new Date("2024-12-16");
                return new Date(
                  e.getTime() + Math.random() * (t.getTime() - e.getTime())
                )
                  .toISOString()
                  .slice(0, 16)
                  .replace("T", " ");
              };
            return Array.from({ length: e }, (e, s) => {
              let a = (9 + 3 * Math.random()).toFixed(5),
                n = (485e3 + 6e4 * Math.random()).toFixed(2),
                l = (45 + 5 * Math.random()).toFixed(2),
                i = (68 + 6 * Math.random()).toFixed(1);
              return [
                { id: "buys", value: a },
                { id: "sells", value: n },
                { id: "roi", value: l },
                { id: "winrate", value: i },
                {
                  id: "tradersProfit",
                  value: (485e3 + 6e4 * Math.random()).toFixed(2),
                },
                { id: "solscan", value: "Link" },
                {
                  id: "numTrades",
                  value: Math.floor(200 + 100 * Math.random()),
                },
                {
                  id: "tradingDays",
                  value: Math.floor(150 + 30 * Math.random()),
                },
                { id: "firstTrade", value: t() },
                { id: "lastTrade", value: t() },
                {
                  id: "solscanLink",
                  value: (function () {
                    let e = ez.RG.generate(),
                      t = e.publicKey.toString();
                    return {
                      address: t,
                      privateKey: eK().encode(e.secretKey),
                      links: {
                        mainnet: "https://solscan.io/account/".concat(t),
                        testnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=testnet"
                        ),
                        devnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=devnet"
                        ),
                      },
                    };
                  })().address,
                },
              ];
            });
          })().map((e) => e.reduce((e, t) => ((e[t.id] = t.value), e), {})),
          (0, l.jsxs)("main", {
            children: [
              (0, l.jsx)(ew, { icon: eA, title: "Crypto Buy Signal " }),
              (0, l.jsx)(eX, {}),
            ],
          })
        );
      let eq = (e) => e.slice(0, 5) + "..." + e.slice(e.length - 5, e.length);
      var eQ = (e) => {
          let { data: t } = e,
            s = (e) =>
              "winrate" === e ||
              "tradersProfit" === e ||
              "solscan" === e ||
              "firstTrade" === e ||
              "lastTrade" === e ||
              "link" === e
                ? "w-[132px]"
                : "w-[100px]",
            a = (e, t) => {
              "solscanLink" === t &&
                window.open(
                  "https://solscan.io/account/".concat(e[t]),
                  "_blank"
                );
            };
          return (
            console.log("data", t),
            (0, l.jsx)("main", {
              className: "px-4 lg:mx-10 ",
              children: (0, l.jsxs)("main", {
                className:
                  "border border-[#D8D8D8] rounded-2xl h-[800px] lg:h-full w-full overflow-y-auto",
                children: [
                  (0, l.jsx)("section", {
                    className:
                      "h-[56px] bg-[#F5F5F7] flex items-center justify-between overflow-x-auto w-[1256px] lg:w-full",
                    children: [
                      { id: "buys", label: "Buys" },
                      { id: "sells", label: "Sells" },
                      { id: "roi", label: "ROI(%)" },
                      { id: "winrate", label: "Winrate(%)" },
                      { id: "tradersProfit", label: "Trader's Profit" },
                      { id: "solscan", label: "solScan" },
                      { id: "numTrades", label: "# of Trades" },
                      { id: "tradingDays", label: "Trading Days" },
                      { id: "firstTrade", label: "First Trade" },
                      { id: "lastTrade", label: "Last Trade" },
                      { id: "link", label: "Solscan link" },
                    ].map((e, t) =>
                      (0, l.jsx)(
                        "div",
                        {
                          className: "".concat(
                            s(e.id),
                            " pr-3 text-center text-sm"
                          ),
                          children: e.label,
                        },
                        t
                      )
                    ),
                  }),
                  (0, l.jsx)("section", {
                    className:
                      "flex flex-col bg-[#fff] overflow-x-auto w-[1256px] lg:w-full",
                    children: t.map((e, t) =>
                      (0, l.jsx)(
                        "div",
                        {
                          className:
                            "h-[56px] bg-[#fff] flex items-center justify-between cursor-pointer hover:bg-[#FAFAFA]",
                          children: Object.keys(e).map((t, n) =>
                            (0, l.jsx)(
                              "div",
                              {
                                onClick: () => a(e, t),
                                className: ""
                                  .concat(s(t), " pr-3 text-center text-sm ")
                                  .concat(
                                    "solscan" === t &&
                                      "text-[#335CFF] underline"
                                  ),
                                children: "solscanLink" === t ? eq(e[t]) : e[t],
                              },
                              n
                            )
                          ),
                        },
                        t
                      )
                    ),
                  }),
                ],
              }),
            })
          );
        },
        eY = {
          src: "/_next/static/media/evm.9ffdf7f1.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        e$ = () => {
          let e = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 12,
              t = () => {
                let e = new Date("2024-12-15"),
                  t = new Date("2024-12-16");
                return new Date(
                  e.getTime() + Math.random() * (t.getTime() - e.getTime())
                )
                  .toISOString()
                  .slice(0, 16)
                  .replace("T", " ");
              };
            return Array.from({ length: e }, (e, s) => {
              let a = (9 + 3 * Math.random()).toFixed(5),
                n = (485e3 + 6e4 * Math.random()).toFixed(2),
                l = (45 + 5 * Math.random()).toFixed(2),
                i = (68 + 6 * Math.random()).toFixed(1);
              return [
                { id: "buys", value: a },
                { id: "sells", value: n },
                { id: "roi", value: l },
                { id: "winrate", value: i },
                {
                  id: "tradersProfit",
                  value: (485e3 + 6e4 * Math.random()).toFixed(2),
                },
                { id: "solscan", value: "Link" },
                {
                  id: "numTrades",
                  value: Math.floor(200 + 100 * Math.random()),
                },
                {
                  id: "tradingDays",
                  value: Math.floor(150 + 30 * Math.random()),
                },
                { id: "firstTrade", value: t() },
                { id: "lastTrade", value: t() },
                {
                  id: "solscanLink",
                  value: (function () {
                    let e = ez.RG.generate(),
                      t = e.publicKey.toString();
                    return {
                      address: t,
                      privateKey: eK().encode(e.secretKey),
                      links: {
                        mainnet: "https://solscan.io/account/".concat(t),
                        testnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=testnet"
                        ),
                        devnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=devnet"
                        ),
                      },
                    };
                  })().address,
                },
              ];
            });
          })().map((e) => e.reduce((e, t) => ((e[t.id] = t.value), e), {}));
          return (0, l.jsxs)("main", {
            children: [
              (0, l.jsx)(ew, {
                icon: eY,
                title: "Ethereum Alpha Wallets For Maestro and Banana Gun",
              }),
              (0, l.jsx)(eQ, { data: e }),
            ],
          });
        },
        e1 = {
          src: "/_next/static/media/solana.e1277d79.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        e0 = () => {
          let e = (function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 12,
              t = () => {
                let e = new Date("2024-12-15"),
                  t = new Date("2024-12-16");
                return new Date(
                  e.getTime() + Math.random() * (t.getTime() - e.getTime())
                )
                  .toISOString()
                  .slice(0, 16)
                  .replace("T", " ");
              };
            return Array.from({ length: e }, (e, s) => {
              let a = (9 + 3 * Math.random()).toFixed(5),
                n = (485e3 + 6e4 * Math.random()).toFixed(2),
                l = (45 + 5 * Math.random()).toFixed(2),
                i = (68 + 6 * Math.random()).toFixed(1);
              return [
                { id: "buys", value: a },
                { id: "sells", value: n },
                { id: "roi", value: l },
                { id: "winrate", value: i },
                {
                  id: "tradersProfit",
                  value: (485e3 + 6e4 * Math.random()).toFixed(2),
                },
                { id: "solscan", value: "Link" },
                {
                  id: "numTrades",
                  value: Math.floor(200 + 100 * Math.random()),
                },
                {
                  id: "tradingDays",
                  value: Math.floor(150 + 30 * Math.random()),
                },
                { id: "firstTrade", value: t() },
                { id: "lastTrade", value: t() },
                {
                  id: "solscanLink",
                  value: (function () {
                    let e = ez.RG.generate(),
                      t = e.publicKey.toString();
                    return {
                      address: t,
                      privateKey: eK().encode(e.secretKey),
                      links: {
                        mainnet: "https://solscan.io/account/".concat(t),
                        testnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=testnet"
                        ),
                        devnet: "https://solscan.io/account/".concat(
                          t,
                          "?cluster=devnet"
                        ),
                      },
                    };
                  })().address,
                },
              ];
            });
          })().map((e) => e.reduce((e, t) => ((e[t.id] = t.value), e), {}));
          return (0, l.jsxs)("main", {
            children: [
              (0, l.jsx)(ew, {
                icon: e1,
                title: "Solana Alpha Wallets Scanner",
              }),
              (0, l.jsx)(eQ, { data: e }),
            ],
          });
        },
        e2 = {
          src: "/_next/static/media/song.b37d0b5f.svg",
          height: 162,
          width: 162,
          blurWidth: 0,
          blurHeight: 0,
        },
        e5 = s(19655);
      let e3 = {
        createSong: (e) => e5.Z.post("/api/dapp/music?prompt=".concat(e)),
        getSongByTaskId: (e) => e5.Z.get("/api/dapp/music/".concat(e)),
      };
      var e6 = () => {
          let [e, t] = (0, r.useState)(""),
            [s, a] = (0, r.useState)(!1),
            [n, i] = (0, r.useState)([]),
            d = async () => {
              try {
                if (!e) return;
                return (await e3.createSong(e)).data;
              } catch (e) {
                throw (
                  (console.log("---error in createMusic", e),
                  Error("Error creating music"))
                );
              }
            },
            o = async (e) => {
              try {
                if (!e) return;
                return (await e3.getSongByTaskId(e)).data;
              } catch (e) {
                throw (
                  (console.log("---error in get music by taskId", e),
                  Error("Error get music"))
                );
              }
            },
            c = async () => {
              try {
                a(!0);
                let e = await d();
                if (!e) {
                  a(!1);
                  return;
                }
                let t = await o(e.task_id);
                if ((console.log("---resusing music", t), !t)) {
                  a(!1);
                  return;
                }
                if (!t.output_data) {
                  let t = await x(e.task_id);
                  t &&
                    t.output_data &&
                    t.output_data.data &&
                    (i(t.output_data.data.map((e) => e.audio_url)), a(!1));
                }
                return;
              } catch (e) {
                a(!1),
                  (0, j.R)("error", "Create audio music failed"),
                  console.log("error in processing audio music");
              }
            };
          (0, r.useEffect)(() => {
            e || i([]);
          }, [e]);
          let x = async (e) => {
            try {
              let t = 0;
              for (; t <= 40; ) {
                let s = await o(e);
                if (
                  (null == s ? void 0 : s.output_data) &&
                  "Running... " !== s.output_data.msg
                )
                  return s;
                t++, await new Promise((e) => setTimeout(e, 5e3));
              }
              return (
                console.error("Max retry attempts reached for task_id:", e),
                null
              );
            } catch (e) {
              throw (console.log("err retry"), Error(e.message));
            }
          };
          return (0, l.jsxs)("div", {
            className: "pb-10 lg:pb-0",
            children: [
              (0, l.jsx)(ew, { icon: e2, title: "Song Maker" }),
              (0, l.jsx)("section", {
                className: "px-4 lg:px-0",
                children: (0, l.jsxs)("div", {
                  className:
                    "bg-[#fff] w-full lg:w-[660px] relative h-[500px] overflow-y-scroll mx-auto border border-[#D8D8D8] rounded-2xl lg:mt-10 p-5",
                  children: [
                    (0, l.jsx)("button", {
                      className:
                        "rounded-[999px] w-[100px] ml-auto block bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] p-[3px]",
                      children: (0, l.jsx)("div", {
                        className:
                          "w-full rounded-full py-1 flex justify-center items-center bg-[#1B1B1B] text-white",
                        children: "v3.5",
                      }),
                    }),
                    (0, l.jsxs)("form", {
                      className: "my-10",
                      children: [
                        (0, l.jsx)("span", {
                          className: "mb-4 inline-block text-sm font-semibold",
                          children: "Song Description",
                        }),
                        (0, l.jsx)("div", {
                          className: "h-[112px] rounded-3xl p-0.5",
                          style: {
                            background:
                              "linear-gradient(to right, #6767FF, #F06DFF)",
                          },
                          children: (0, l.jsx)("div", {
                            className: "relative rounded-[22px] bg-white p-0",
                            children: (0, l.jsx)(P.g, {
                              placeholder:
                                "Try something like: 'A futuristic city at sunset, filled with flying cars and neon lights, in a cyberpunk style.'",
                              onChange: (e) => t(e.target.value),
                              className:
                                "relative inline-flex min-h-[101px] resize-none appearance-none items-start justify-start gap-4 border-none bg-transparent p-6 pr-12 font-inter text-base font-normal leading-normal placeholder-[#aeaeae]",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("button", {
                      disabled: !e || s,
                      onClick: c,
                      className:
                        "rounded-[999px] mt-auto w-full ml-auto block bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] p-[3px] ".concat(
                          !e || (s && "opacity-50")
                        ),
                      children: (0, l.jsx)("div", {
                        className:
                          "w-full rounded-full py-1 flex justify-center items-center bg-[#1B1B1B] text-white",
                        children: s ? "Creating..." : "Create",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 justify-self-center",
                      children: n.map((e, t) =>
                        (0, l.jsx)(
                          "audio",
                          {
                            controls: !0,
                            children: (0, l.jsx)("source", {
                              src: e,
                              type: "audio/mpeg",
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        e4 = {
          src: "/_next/static/media/layer.7c4a84f0.png",
          height: 32,
          width: 32,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEVMaXH/MG3/MG3/L27/SID/MG//L2z/MG7/M3YIfJzQAAAACHRSTlMArBrRB0aVvugbtbAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAuSURBVHicRcq5EQAwDAJBEHrov2IHGtsXbXDAK6u7EgjaNgPBkWZBLiSJ8efbARh4AKWtF6tNAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        e8 = s(42921),
        e9 = s(53507);
      let e7 = {
        MockToken: "0x0f48E776a4D983C0dDDF4C0c946D66e3786F134f",
        MockAddress: "0xeb1F3919Cf572D31d5bc0866EDC421907435fEfE",
      };
      var te = JSON.parse(
          '[{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"uint256","name":"_maxTotalStaked","type":"uint256"},{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"},{"internalType":"uint256","name":"_stakingPeriod","type":"uint256"},{"internalType":"uint256","name":"_earlyUnstakePenality","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"newStakingContract","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethAmount","type":"uint256"}],"name":"Migrated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[],"name":"calculateAllPendingRewards","outputs":[{"internalType":"uint256","name":"totalClaimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_index","type":"uint256"}],"name":"calculateReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deadWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"earlyUnstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"earlyUnstakePenality","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserStakingDetails","outputs":[{"internalType":"uint256","name":"_totalStaked","type":"uint256"},{"internalType":"uint256","name":"totalRewardsInEth","type":"uint256"},{"internalType":"uint256[]","name":"timeElapsedPerStake","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWalletClaimableRewards","outputs":[{"internalType":"uint256","name":"totalClaimable","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWalletReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWalletStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getWalletStakes","outputs":[{"components":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"rewardPaid","type":"uint256"}],"internalType":"struct NodeStaking.Stake[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isStaker","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPerWallet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newStakingContract","type":"address"}],"name":"migrate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remainingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPerWallet","type":"uint256"}],"name":"setMaxPerWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxTotalStaked","type":"uint256"}],"name":"setMaxTotalStaked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_paused","type":"bool"}],"name":"setPaused","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"}],"name":"setStakingToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakes","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"rewardPaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalUserRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_index","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
        ),
        tt = () => {
          let { address: e } = (0, $.m)(),
            {
              data: t,
              isLoading: s,
              error: a,
              refetch: n,
            } = (0, e9.u)({
              address: e7.MockAddress,
              abi: te,
              functionName: "totalUserRewards",
              args: [e],
            });
          return (
            (0, r.useEffect)(() => {
              let e = setInterval(() => {
                n();
              }, 1e4);
              return () => clearInterval(e);
            }, [n]),
            {
              ...(0, r.useMemo)(
                () =>
                  t && "bigint" == typeof t
                    ? { claimedAmount: t, formattedAmount: (0, e8.b)(t, 9) }
                    : { claimedAmount: BigInt(0), formattedAmount: "0" },
                [t]
              ),
              isLoading: s,
              error: a,
              refetch: n,
            }
          );
        },
        ts = s(71293),
        ta = function (e) {
          let { onSuccess: t, onError: s } = e,
            [a, n] = (0, r.useState)({
              isLoading: !1,
              isSuccess: !1,
              error: null,
              txHash: null,
            }),
            { writeContractAsync: l } = (0, eB.S)(),
            { data: i } = (0, ts.V)({ hash: null == a ? void 0 : a.txHash });
          return (
            (0, r.useEffect)(() => {
              (null == i ? void 0 : i.status) === "success" &&
                (n((e) => ({ ...e, isLoading: !1, isSuccess: !0 })),
                null == t || t());
            }, [i]),
            {
              claimRewards: (0, r.useCallback)(async () => {
                try {
                  n({
                    isLoading: !0,
                    isSuccess: !1,
                    error: null,
                    txHash: null,
                  });
                  let e = await l({
                    address: e7.MockAddress,
                    abi: te,
                    functionName: "claimRewards",
                  });
                  n((t) => ({ ...t, txHash: e }));
                } catch (e) {
                  n((t) => ({ ...t, isLoading: !1, error: e })),
                    null == s || s(e);
                }
              }, [l, s]),
              reset: (0, r.useCallback)(() => {
                n({ isLoading: !1, isSuccess: !1, error: null, txHash: null });
              }, []),
              ...a,
            }
          );
        },
        tn = function () {
          let [e, t] = (0, r.useState)({
              totalStaked: BigInt(0),
              formattedTotalStaked: "0",
              isLoading: !0,
              error: null,
            }),
            {
              data: s,
              isLoading: a,
              error: n,
            } = (0, e9.u)({
              address: e7.MockAddress,
              abi: te,
              functionName: "totalStaked",
            });
          return (
            (0, r.useEffect)(() => {
              null != s &&
                ("string" == typeof s ||
                  "number" == typeof s ||
                  "bigint" == typeof s) &&
                t({
                  totalStaked: BigInt(s),
                  formattedTotalStaked: (0, e8.b)(BigInt(s), 9),
                  isLoading: !1,
                  error: null,
                });
            }, [s]),
            (0, r.useEffect)(() => {
              n && t((e) => ({ ...e, isLoading: !1, error: n }));
            }, [n]),
            e
          );
        },
        tl = () => {
          let { address: e } = (0, $.m)(),
            {
              data: t,
              isLoading: s,
              error: a,
              refetch: n,
            } = (0, e9.u)({
              address: e7.MockAddress,
              abi: te,
              functionName: "getWalletClaimableRewards",
              args: [e],
            });
          return (
            (0, r.useEffect)(() => {
              let e = setInterval(() => {
                n();
              }, 1e4);
              return () => clearInterval(e);
            }, [n]),
            {
              ...(0, r.useMemo)(
                () =>
                  t &&
                  ("string" == typeof t ||
                    "number" == typeof t ||
                    "bigint" == typeof t)
                    ? {
                        claimableRewards: BigInt(t),
                        formattedRewards: (0, e8.b)(BigInt(t), 9),
                      }
                    : { claimableRewards: BigInt(0), formattedRewards: "0" },
                [t]
              ),
              isLoading: s,
              error: a,
              refetch: n,
            }
          );
        },
        ti = () => {
          let { address: e } = (0, $.m)(),
            {
              data: t,
              isLoading: s,
              error: a,
            } = (0, e9.u)({
              address: e7.MockAddress,
              abi: te,
              functionName: "getUserStakingDetails",
              args: [e],
            });
          return {
            ...(0, r.useMemo)(() => {
              if (!t)
                return {
                  totalStaked: 0,
                  totalRewardsInEth: 0,
                  timeElapsedPerStake: [],
                };
              let [e, s, a] = t;
              return {
                totalStaked: Number((0, e8.b)(e, 9)),
                totalRewardsInEth: Number((0, e8.b)(s, 9)),
                timeElapsedPerStake: a,
              };
            }, [t]),
            isLoading: s,
            error: a,
          };
        },
        tr = {
          src: "/_next/static/media/eth.38c8ccf5.svg",
          height: 48,
          width: 49,
          blurWidth: 0,
          blurHeight: 0,
        },
        td = {
          src: "/_next/static/media/pending.c50415ab.svg",
          height: 49,
          width: 49,
          blurWidth: 0,
          blurHeight: 0,
        },
        to = {
          src: "/_next/static/media/stack.75a2d065.svg",
          height: 48,
          width: 49,
          blurWidth: 0,
          blurHeight: 0,
        },
        tc = s(64243),
        tx = s(35231),
        tu = s(15821),
        tp = s(9542),
        tm = s(85475),
        th = s(92893),
        tf = s(16638);
      let tg = (e) => {
        let { active: t, payload: s } = e;
        return t && s && s.length, null;
      };
      var tb = () => {
          let { totalRewardsInEth: e } = ti(),
            { formattedTotalStaked: t } = tn(),
            { formattedAmount: s, refetch: a } = tt(),
            [n, i] = (0, r.useState)([]),
            [d, o] = (0, r.useState)([]),
            { address: c } = (0, $.m)(),
            { formattedRewards: x, claimableRewards: p, refetch: m } = tl(),
            { claimRewards: h, isLoading: g } = ta({
              onSuccess: () => {
                m(), a(), (0, j.R)("success", "Rewards claimed successfully");
              },
              onError: () => {
                (0, j.R)("error", "Failed to claim rewards");
              },
            });
          (0, r.useEffect)(() => {
            (async () => {
              let e = await (0, tc.Em)(String(c));
              e.data ? (o(e.data.stake), i(e.data.reward)) : (i([]), o([]));
            })();
          }, [c]);
          let b = d.map((e) => ({
              name: e.timestamp,
              value: Number(e.amount),
            })),
            y = n.map((e) => ({ name: e.timestamp, value: Number(e.amount) })),
            [w, C] = (0, r.useState)(null),
            A = (e) => {
              e && void 0 !== e.activeTooltipIndex
                ? C(e.activeTooltipIndex)
                : C(null);
            },
            N = () => {
              C(null);
            };
          return (0, l.jsxs)("div", {
            className: "flex md:flex-row flex-col gap-3 md:min-h-[308px] px-10",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "p-[4px] flex h-full justify-between relative overflow-hidden flex-1 rounded-3xl",
                children: [
                  (0, l.jsx)(f.E.div, {
                    className: "absolute inset-[-50%] rounded-3xl z-10",
                    style: {
                      background:
                        "linear-gradient(90deg, #FFFFFF 30%, rgba(103, 103, 255, 0.1) 43%, #F06DFF 57%, #F1D789 70%)",
                    },
                    animate: { rotate: [0, 360] },
                    transition: { duration: 8, ease: "linear", repeat: 1 / 0 },
                  }),
                  (0, l.jsxs)("div", {
                    className: (0, u.cn)(
                      "relative z-10 rounded-3xl h-full p-6 bg-[#FAFAFA] flex flex-col md:justify-between gap-4",
                      "backdrop-blur-sm bg-opacity-95 flex-1"
                    ),
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "flex flex-col gap-3 items-center justify-center h-full",
                        children: [
                          (0, l.jsx)(v.default, { src: td, alt: "pending" }),
                          (0, l.jsx)("span", {
                            className: "text-sm font-medium text-[#666666]",
                            children: "My pending reward",
                          }),
                          (0, l.jsxs)("h3", {
                            className:
                              "text-2xl text-[#1B1B1B] font-semibold text-center",
                            children: [x, " XETRA"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        disabled: g || 0 === Number(p),
                        onClick: h,
                        className:
                          "\n        hover:scale-105 transition-all duration-300 ease-in-out\n        bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] p-[2px] w-full rounded-full ".concat(
                            g || 0 === Number(p) ? "opacity-50" : ""
                          ),
                        children: (0, l.jsx)("div", {
                          className:
                            "flex items-center justify-center rounded-full px-8 py-1.5 bg-[#1B1B1B] text-white gap-2",
                          children: (0, l.jsx)("span", {
                            children: g ? "Claiming..." : "Claim reward",
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex-1 bg-white rounded-[20px] p-6 overflow-hidden shadow-[0px_2px_12px_-2px_rgba(189,177,201,0.16)] flex flex-col gap-3",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, l.jsx)(v.default, { src: tr, alt: "eth" }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-sm text-[#666666] font-medium",
                            children: "My claimed XETRA",
                          }),
                          (0, l.jsxs)("h1", {
                            className: "text-xl text-[#1B1B1B] font-semibold",
                            children: [s, " XETRA"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "h-full",
                    children: (0, l.jsx)(tx.h, {
                      width: "100%",
                      height: "100%",
                      children: (0, l.jsxs)(tu.w, {
                        data: y,
                        onMouseMove: A,
                        onMouseLeave: N,
                        children: [
                          (0, l.jsx)(tp.B, {
                            hide: !0,
                            domain: ["auto", "auto"],
                          }),
                          (0, l.jsx)(tm.u, { content: (0, l.jsx)(tg, {}) }),
                          (0, l.jsx)(th.d, {
                            stroke: "#E5E7EB",
                            strokeDasharray: "3 3",
                            strokeWidth: 1,
                          }),
                          (0, l.jsx)(tf.x, {
                            type: "linear",
                            dataKey: "value",
                            stroke: "#22C55E",
                            strokeWidth: 2,
                            dot: !1,
                            activeDot: { r: 6, fill: "#22C55E" },
                            isAnimationActive: !1,
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "flex-1 bg-white rounded-[20px] p-6 overflow-hidden shadow-[0px_2px_12px_-2px_rgba(189,177,201,0.16)] flex flex-col gap-3",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, l.jsx)(v.default, { src: to, alt: "stack" }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col gap-2",
                        children: [
                          (0, l.jsx)("span", {
                            className: "text-sm text-[#666666] font-medium",
                            children: "Total Staked",
                          }),
                          (0, l.jsxs)("h1", {
                            className: "text-xl text-[#1B1B1B] font-semibold",
                            children: [
                              Number(t).toLocaleString(void 0, {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 3,
                              }),
                              " $XETRA",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "h-full",
                    children: (0, l.jsx)(tx.h, {
                      width: "100%",
                      height: "100%",
                      children: (0, l.jsxs)(tu.w, {
                        data: b,
                        onMouseMove: A,
                        onMouseLeave: N,
                        children: [
                          (0, l.jsx)(tp.B, {
                            hide: !0,
                            domain: ["auto", "auto"],
                          }),
                          (0, l.jsx)(tm.u, { content: (0, l.jsx)(tg, {}) }),
                          (0, l.jsx)(th.d, {
                            stroke: "#E5E7EB",
                            strokeDasharray: "3 3",
                            strokeWidth: 1,
                          }),
                          (0, l.jsx)(tf.x, {
                            type: "linear",
                            dataKey: "value",
                            stroke: "#22C55E",
                            strokeWidth: 2,
                            dot: !1,
                            activeDot: { r: 6, fill: "#22C55E" },
                            isAnimationActive: !1,
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        tj = s(95742),
        tv = s(84173);
      let ty = { amount: "", isLoading: !1, txHash: "" },
        tw = (0, V.U)((e) => ({
          ...ty,
          setField: (t, s) => e((e) => ({ ...e, [t]: s })),
          setStakeData: (t) => e((e) => ({ ...e, ...t })),
          reset: () => e(ty),
        }));
      var tC = s(24715),
        tA = s(19050),
        tN = () => {
          let { address: e } = (0, $.m)(),
            [t, s] = (0, r.useState)(""),
            [a, n] = (0, r.useState)(!1),
            { open: i } = (0, tC.Ig)(),
            { open: d } = (0, tv.b)(),
            { setField: o, isLoading: c } = tw(),
            { totalStaked: x } = ti(),
            { data: u, refetch: p } = (0, tA.K)({
              address: e,
              token: e7.MockToken,
            }),
            m = [
              { title: "APY", value: "10%" },
              {
                title: "Your stake",
                value: "".concat(
                  Number(x).toLocaleString(void 0, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                  }),
                  " $XETRA"
                ),
              },
              {
                title: "Balance",
                value: "".concat(
                  Number(
                    (null == u ? void 0 : u.formatted) || 0
                  ).toLocaleString(void 0, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 3,
                  }),
                  " $XETRA"
                ),
              },
            ],
            h = (e) => {
              u && s((Number(u.formatted) * e).toString());
            };
          return (
            (0, r.useEffect)(() => {
              let e = Number(t),
                s = Number((null == u ? void 0 : u.formatted) || 0);
              n(e > 0 && e <= s && e <= 1e5);
            }, [t, u]),
            (0, r.useEffect)(() => {
              p();
            }, [c]),
            (0, l.jsxs)("div", {
              className:
                "p-6 rounded-3xl bg-white shadow-[0px_0px_24px_0px_rgba(244,122,255,0.24)] md:mx-10 mx-4 flex flex-col gap-4",
              children: [
                (0, l.jsx)("h1", {
                  className: "text-[#1B1B1B] text-2xl font-semibold",
                  children: "Stake and Earn",
                }),
                (0, l.jsxs)("div", {
                  className: "flex md:flex-row flex-col gap-3 w-full",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex flex-col gap-[10px] md:min-w-[700px]",
                      children: [
                        (0, l.jsx)("div", {
                          className:
                            "flex md:flex-row flex-col gap-[10px] w-full",
                          children: m.map((e, t) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                className:
                                  "bg-[#F5F5F7] rounded-xl p-4 flex flex-col gap-2 md:min-h-[201px] w-full md:max-w-[226px] flex-1 relative overflow-hidden",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "h-[44px] w-[4px] rounded-e-sm bg-[#FF306E] absolute top-[13px] left-0",
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "text-[#666666] text-sm",
                                    children: e.title,
                                  }),
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[#1B1B1B] text-2xl font-semibold",
                                    children: e.value,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                        (0, l.jsx)("div", {
                          className:
                            "flex bg-[#F5F5F7] rounded-xl min-h-[120px] w-full md:flex-row flex-col",
                          children: [
                            { label: "LOCK PERIOD", value: "30 days" },
                            { label: "EARLY UNSTAKE FEE", value: "20% linear" },
                            { label: "MAX WALLET STAKE", value: "100,000" },
                            { label: "MAX POOL STAKE", value: "10,000,000" },
                          ].map((e, t) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                className:
                                  "flex flex-col gap-2 p-4 flex-1 justify-center items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[#FF306E] text-xl font-semibold",
                                    children: e.value,
                                  }),
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[#666666] text-sm uppercase",
                                    children: e.label,
                                  }),
                                ],
                              },
                              t
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "p-6 rounded-[20px] flex-1 w-full border flex flex-col justify-between border-[#EAEAEA] shadow-[0px_1px_3px_0px_rgba(16,24,40,0.06),0px_1px_2px_0px_rgba(16,24,40,0.04)]",
                      children: [
                        (0, l.jsx)("h2", {
                          className: "text-2xl font-semibold text-[#1B1B1B]",
                          children: "Staking",
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "p-3 flex flex-col gap-3 items-center relative",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "absolute inset-0 flex z-0 items-center justify-center",
                              children: (0, l.jsx)(v.default, {
                                src: tj.Z,
                                alt: "layer",
                                layout: "fill",
                                objectFit: "cover",
                              }),
                            }),
                            (0, l.jsx)("input", {
                              type: "text",
                              value: t,
                              onChange: (e) => {
                                let t = e.target.value.replace(/[^0-9.]/g, "");
                                ("" === t ||
                                  (Number(t) >= 0 &&
                                    Number(t) <=
                                      Number(
                                        (null == u ? void 0 : u.formatted) || 0
                                      ))) &&
                                  s(t);
                              },
                              placeholder: "Enter amount",
                              className:
                                "w-full placeholder:text-[#AEAEAE] placeholder:underline text-center z-10 bg-transparent focus:outline-none min-w-[200px] text-[32px] font-semibold text-[#FF306E] underline focus:border-pink-500",
                            }),
                            (0, l.jsxs)("div", {
                              className:
                                "flex items-center text-sm justify-items-center z-10",
                              children: [
                                (0, l.jsx)("span", {
                                  className: "text-[#AEAEAE]",
                                  children: "Balance: ",
                                }),
                                (0, l.jsxs)("span", {
                                  className: "text-[#1B1B1B] font-semibold",
                                  children: [
                                    Number(
                                      (null == u ? void 0 : u.formatted) || 0
                                    ).toLocaleString(void 0, {
                                      minimumFractionDigits: 0,
                                      maximumFractionDigits: 3,
                                    }),
                                    " XETRA",
                                  ],
                                }),
                              ],
                            }),
                            (0, l.jsx)("div", {
                              className: "flex gap-2 z-10",
                              children: [
                                { value: 0.1, label: "10%" },
                                { value: 0.25, label: "25%" },
                                { value: 0.5, label: "50%" },
                                { value: 1, label: "Max" },
                              ].map((e, t) =>
                                (0, l.jsx)(
                                  "button",
                                  {
                                    onClick: () => h(e.value),
                                    className:
                                      "px-2 py-1 rounded-full border border-[#FF306E] text-[#FF306E] hover:bg-pink-50 transition-colors text-sm",
                                    children: e.label,
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, l.jsx)("button", {
                          disabled: !a,
                          onClick: () => {
                            e || i(), a && (o("amount", t), d("stakeDetail"));
                          },
                          className:
                            "w-full py-3 z-10 rounded-full text-sm font-medium transition-colors\n              ".concat(
                              a
                                ? "bg-[#FF306E] text-white hover:bg-[#E02861]"
                                : "bg-[#EAEAEA] text-[#AEAEAE]"
                            ),
                          children: e
                            ? (null == u ? void 0 : u.formatted)
                              ? 0 === Number(null == u ? void 0 : u.formatted)
                                ? "Not enough balance"
                                : a
                                ? "Stake Now"
                                : "Enter valid amount"
                              : "Loading..."
                            : "Connect Wallet",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        tk = () =>
          (0, l.jsxs)("div", {
            className:
              "w-full flex flex-col pb-20 md:pb-0 animate-slide-in-right space-y-8 h-[calc(100vh-50px)] overflow-y-auto standard-scroll ",
            children: [
              (0, l.jsxs)("div", {
                className: "md:flex justify-between md:px-10 px-4",
                children: [
                  (0, l.jsxs)("h1", {
                    className:
                      "flex items-center justify-start gap-4 font-semibold text-[32px] leading-normal tracking-[-0.8px] text-[#1b1b1b] h-16 ",
                    children: [
                      (0, l.jsx)(v.default, {
                        src: e4,
                        alt: "Explore",
                        width: 32,
                        height: 32,
                      }),
                      (0, l.jsx)("span", { children: "Stake" }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "",
                    children: (0, l.jsx)(eH.Z, {}),
                  }),
                ],
              }),
              (0, l.jsx)(tN, {}),
              (0, l.jsx)(tb, {}),
            ],
          }),
        tB = () => {
          var e, t, s, a;
          let n = (0, y.cI)({
              defaultValues: {
                aiAgentBio: "",
                aiAgentLore: "",
                aiAgentTopics: "",
                aiAgentGeneralStyle: "",
                aiAgentChatStyle: "",
                aiAgentPostStyle: "",
                aiAgentPostExamples: "",
                aiAgentMessageExamples: [{ userAsk: "", agentResponse: "" }],
                aiAgentAdjectives: [],
              },
            }),
            [i, d] = (0, r.useState)(null),
            o = (0, x.useRouter)(),
            c = (0, x.useSearchParams)().get("id");
          return ((0, r.useEffect)(() => {
            (async () => {
              let e = await (0, q.q)(String(c));
              e.data && d(e.data);
            })();
          }, [c]),
          (0, r.useEffect)(() => {
            i &&
              n.reset({
                aiAgentBio: (i.character.bio || []).join("\n"),
                aiAgentLore: (i.character.lore || []).join("\n"),
                aiAgentTopics: (i.character.topics || []).join("\n"),
                aiAgentGeneralStyle: i.character.style.all.join("\n"),
                aiAgentChatStyle: (i.character.style.chat || []).join("\n"),
                aiAgentPostStyle: (i.character.style.post || []).join("\n"),
                aiAgentPostExamples: (i.character.postExamples || []).join(
                  "\n"
                ),
                aiAgentMessageExamples: i.character.messageExamples || [
                  { userAsk: "", agentResponse: "" },
                ],
                aiAgentAdjectives: i.character.adjectives || [],
              });
          }, [i]),
          c)
            ? (0, l.jsx)(y.RV, {
                ...n,
                children: (0, l.jsxs)("form", {
                  onSubmit: n.handleSubmit((e) => {
                    console.log(e);
                  }),
                  className:
                    "mx-auto w-full flex flex-col gap-6 justify-center",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "md:flex justify-between md:px-10 px-4",
                      children: [
                        (0, l.jsxs)("h1", {
                          className:
                            "flex items-center justify-start gap-4 font-semibold text-[32px] leading-normal tracking-[-0.8px] text-[#1b1b1b] h-16 ",
                          children: [
                            (0, l.jsx)(v.default, {
                              src: eS.Z,
                              alt: "Explore",
                              width: 32,
                              height: 32,
                            }),
                            (0, l.jsx)("span", { children: "View Agent" }),
                          ],
                        }),
                        (0, l.jsx)(eH.Z, {}),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "w-full flex justify-center",
                      children: (0, l.jsxs)("div", {
                        className:
                          "flex flex-col gap-10 bg-[#FFF] p-10 rounded-[32px] w-full max-w-[750px]",
                        children: [
                          (0, l.jsxs)("div", {
                            className:
                              "flex-col justify-start items-start gap-6 inline-flex",
                            children: [
                              (0, l.jsx)(v.default, {
                                src: eV,
                                alt: "Andrew Tate",
                                width: 48,
                                height: 48,
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "flex-col justify-start items-start gap-2 flex",
                                children: [
                                  (0, l.jsx)("div", {
                                    className:
                                      "text-[#1b1b1b] text-5xl font-semibold font-inter",
                                    children:
                                      null == i ? void 0 : i.character.name,
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, l.jsxs)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 20 20",
                                        fill: "none",
                                        children: [
                                          (0, l.jsxs)("g", {
                                            clipPath: "url(#clip0_16074_3576)",
                                            children: [
                                              (0, l.jsx)("path", {
                                                d: "M13.7506 10.8335C14.2109 10.8335 14.584 10.4604 14.584 10.0002C14.584 9.53992 14.2109 9.16683 13.7506 9.16683H10.834V4.5835C10.834 4.12326 10.4609 3.75016 10.0007 3.75016C9.54041 3.75016 9.16732 4.12326 9.16732 4.5835V10.0002C9.16732 10.4604 9.54041 10.8335 10.0007 10.8335H13.7506Z",
                                                fill: "#AEAEAE",
                                              }),
                                              (0, l.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M10.0007 0.833496C4.93804 0.833496 0.833984 4.93755 0.833984 10.0002C0.833984 15.0628 4.93804 19.1668 10.0007 19.1668C15.0633 19.1668 19.1673 15.0628 19.1673 10.0002C19.1673 4.93755 15.0633 0.833496 10.0007 0.833496ZM2.50065 10.0002C2.50065 5.85803 5.85851 2.50016 10.0007 2.50016C14.1428 2.50016 17.5006 5.85803 17.5006 10.0002C17.5006 14.1423 14.1428 17.5002 10.0007 17.5002C5.85851 17.5002 2.50065 14.1423 2.50065 10.0002Z",
                                                fill: "#AEAEAE",
                                              }),
                                            ],
                                          }),
                                          (0, l.jsx)("defs", {
                                            children: (0, l.jsx)("clipPath", {
                                              id: "clip0_16074_3576",
                                              children: (0, l.jsx)("rect", {
                                                width: "20",
                                                height: "20",
                                                fill: "white",
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      (0, l.jsx)("span", {
                                        className:
                                          "text-base text-[#1B1B1B] font-medium",
                                        children: eW(
                                          null !==
                                            (s =
                                              null == i
                                                ? void 0
                                                : i.created_at) && void 0 !== s
                                            ? s
                                            : ""
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("p", {
                                    className: "text-[#666666] text-base",
                                    children: [
                                      "Create by ",
                                      (0, l.jsx)("span", {
                                        className:
                                          "text-[#FF306E] font-semibold",
                                        children: eq(
                                          null !==
                                            (a =
                                              null == i ? void 0 : i.creator) &&
                                            void 0 !== a
                                            ? a
                                            : "0x0000000000"
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, l.jsxs)("div", {
                                    className:
                                      "border border-[#1FC16B] w-fit px-4 py-1 rounded-full bg-[#E0FAEC] flex gap-1 items-center",
                                    children: [
                                      (0, l.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        children: (0, l.jsx)("path", {
                                          d: "M10.3606 11.0269C10.2295 11.0264 10.1014 10.9874 9.99239 10.9146C9.88337 10.8417 9.79824 10.7384 9.74765 10.6174C9.69706 10.4965 9.68326 10.3633 9.70797 10.2345C9.73269 10.1058 9.79482 9.98715 9.8866 9.89352C10.3866 9.39105 10.6673 8.71104 10.6673 8.00218C10.6673 7.29333 10.3866 6.61332 9.8866 6.11085C9.76568 5.98447 9.69927 5.81562 9.7017 5.64073C9.70412 5.46583 9.77519 5.29889 9.89957 5.17591C10.0239 5.05293 10.1917 4.98376 10.3666 4.98331C10.5415 4.98286 10.7096 5.05118 10.8346 5.17352C11.5815 5.92549 12.0006 6.94233 12.0006 8.00218C12.0006 9.06204 11.5815 10.0789 10.8346 10.8309C10.7724 10.8932 10.6986 10.9426 10.6172 10.9763C10.5358 11.0099 10.4486 11.0271 10.3606 11.0269ZM6.10926 10.8342C6.23495 10.7099 6.30613 10.5407 6.30713 10.364C6.30813 10.1872 6.23887 10.0172 6.1146 9.89152C5.61459 9.38905 5.3339 8.70904 5.3339 8.00019C5.3339 7.29133 5.61459 6.61132 6.1146 6.10885C6.17782 6.04697 6.2281 5.97313 6.2625 5.89162C6.2969 5.81011 6.31474 5.72257 6.31496 5.6341C6.31519 5.54563 6.29781 5.458 6.26382 5.37632C6.22984 5.29464 6.17994 5.22053 6.11703 5.15833C6.05412 5.09613 5.97946 5.04707 5.89739 5.01401C5.81533 4.98096 5.72751 4.96457 5.63905 4.96579C5.55059 4.96702 5.46326 4.98584 5.38214 5.02116C5.30103 5.05648 5.22776 5.10759 5.1666 5.17152C4.41972 5.92349 4.00055 6.94033 4.00055 8.00019C4.00055 9.06004 4.41972 10.0769 5.1666 10.8289C5.29091 10.9545 5.46005 11.0257 5.63683 11.0267C5.8136 11.0277 5.98354 10.9585 6.10926 10.8342ZM12.9553 12.4475C14.0572 11.2283 14.6672 9.64352 14.6672 8.00019C14.6672 6.35685 14.0572 4.77203 12.9553 3.55285C12.8366 3.42175 12.6708 3.34314 12.4942 3.33433C12.3176 3.32551 12.1447 3.38721 12.0136 3.50585C11.8825 3.62449 11.8039 3.79035 11.7951 3.96695C11.7863 4.14355 11.848 4.31641 11.9666 4.44752C12.8466 5.42153 13.3338 6.6875 13.3338 8.00019C13.3338 9.31287 12.8466 10.5788 11.9666 11.5529C11.848 11.684 11.7863 11.8568 11.7951 12.0334C11.8039 12.21 11.8825 12.3759 12.0136 12.4945C12.1447 12.6132 12.3176 12.6749 12.4942 12.666C12.6708 12.6572 12.8366 12.5786 12.9553 12.4475ZM3.98726 12.4942C4.11832 12.3756 4.19693 12.2098 4.2058 12.0333C4.21468 11.8568 4.1531 11.684 4.0346 11.5529C3.15457 10.5788 2.66737 9.31287 2.66737 8.00019C2.66737 6.6875 3.15457 5.42153 4.0346 4.44752C4.09334 4.3826 4.13872 4.30675 4.16816 4.22429C4.19759 4.14184 4.21049 4.05439 4.20612 3.96695C4.20176 3.87951 4.18021 3.79378 4.14272 3.71467C4.10522 3.63555 4.05251 3.5646 3.9876 3.50585C3.92268 3.44711 3.84683 3.40172 3.76437 3.37229C3.68192 3.34286 3.59447 3.32996 3.50703 3.33433C3.33043 3.34314 3.16457 3.42175 3.04593 3.55285C1.94404 4.77203 1.33398 6.35685 1.33398 8.00019C1.33398 9.64352 1.94404 11.2283 3.04593 12.4475C3.1646 12.5785 3.33042 12.657 3.50694 12.6657C3.68345 12.6745 3.85622 12.6128 3.98726 12.4942ZM8.0006 7.00018C7.80282 7.00018 7.60948 7.05883 7.44503 7.16872C7.28058 7.2786 7.15241 7.43478 7.07672 7.6175C7.00103 7.80023 6.98123 8.00129 7.01981 8.19528C7.0584 8.38926 7.15364 8.56744 7.29349 8.70729C7.43334 8.84714 7.61153 8.94238 7.80551 8.98097C7.99949 9.01956 8.20055 8.99975 8.38328 8.92406C8.56601 8.84838 8.72219 8.7202 8.83207 8.55575C8.94195 8.39131 9.0006 8.19797 9.0006 8.00019C9.0006 7.73497 8.89524 7.48061 8.7077 7.29308C8.52017 7.10554 8.26581 7.00018 8.0006 7.00018Z",
                                          fill: "#1FC16B",
                                        }),
                                      }),
                                      (0, l.jsx)("span", {
                                        className:
                                          "text-[#1FC16B] text-sm font-semibold",
                                        children: "Running",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "h-8 flex-col justify-start items-start gap-2 inline-flex",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      "justify-start items-start gap-2 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "w-6 h-6 relative overflow-hidden",
                                        children: (0, l.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: [
                                            (0, l.jsx)("path", {
                                              d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                              fill: "#F6B51E",
                                            }),
                                            (0, l.jsx)("path", {
                                              d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                              fill: "#F6B51E",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-[#1b1b1b] text-lg font-semibold font-inter",
                                        children: "Character details",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentBio",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, { children: "Bio" }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[194px] pr-1 text-sm leading-tight disabled:opacity-100",
                                          placeholder:
                                            "Write a brief biography of the character",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentLore",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, { children: "Lore" }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[194px] pr-1 text-sm leading-tight disabled:opacity-100",
                                          placeholder:
                                            "Provide detailed background information about the character",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentTopics",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, { children: "Topics" }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[122px] text-sm leading-tight disabled:opacity-100",
                                          placeholder:
                                            "Enumerate the subjects the character is well-versed in or passionate about. Write one complete sentence per line.",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "h-8 flex-col justify-start items-start gap-2 inline-flex",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      "justify-start items-start gap-2 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "w-6 h-6 relative overflow-hidden",
                                        children: (0, l.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: [
                                            (0, l.jsx)("path", {
                                              d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                              fill: "#FF306E",
                                            }),
                                            (0, l.jsx)("path", {
                                              d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                              fill: "#FF306E",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-[#1b1b1b] text-lg font-semibold font-inter",
                                        children: "Style",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentGeneralStyle",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, {
                                        children: "General Style",
                                      }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[122px] disabled:opacity-100",
                                          placeholder:
                                            "Outline the character's overall communication style. Mention speech patterns, mannerisms and common expressions. Write one complete sentence per line.",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentChatStyle",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, { children: "Chat Style" }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[122px] disabled:opacity-100",
                                          placeholder:
                                            "Explain the character's conversational behavior. Include typical responses and chat-specific quirks. Write one complete sentence per line.",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentPostStyle",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, { children: "Post Style" }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[122px] disabled:opacity-100",
                                          placeholder:
                                            "Detail the character's approach to writing posts or longer content. Include their formatting preferences and overall writing style. Write one complete sentence per line.",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "h-8 flex-col justify-start items-start gap-2 inline-flex",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      "justify-start items-start gap-2 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "w-6 h-6 relative overflow-hidden",
                                        children: (0, l.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: [
                                            (0, l.jsx)("path", {
                                              d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                              fill: "#FF8447",
                                            }),
                                            (0, l.jsx)("path", {
                                              d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                              fill: "#FF8447",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-[#1b1b1b] text-lg font-semibold font-inter",
                                        children: "Examples",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                                  }),
                                ],
                              }),
                              (0, l.jsx)(F, {
                                control: n.control,
                                name: "aiAgentPostExamples",
                                render: (e) => {
                                  let { field: t } = e;
                                  return (0, l.jsxs)(T, {
                                    children: [
                                      (0, l.jsx)(S, {
                                        children: "Post Examples",
                                      }),
                                      (0, l.jsx)(L, {
                                        children: (0, l.jsx)(P.g, {
                                          disabled: !0,
                                          className:
                                            "h-[122px] disabled:opacity-100",
                                          placeholder:
                                            "Provide sample posts showcasing the character's writing style. Include various types of content they might produce. Write each post on a new line.",
                                          ...t,
                                        }),
                                      }),
                                      (0, l.jsx)(D, {}),
                                    ],
                                  });
                                },
                              }),
                              null ===
                                (e = n.watch("aiAgentMessageExamples")) ||
                              void 0 === e
                                ? void 0
                                : e.map((e, t) =>
                                    (0, l.jsxs)(
                                      T,
                                      {
                                        className:
                                          "h-[172px] w-full justify-start items-start gap-2 flex space-y-0",
                                        children: [
                                          (0, l.jsx)(y.Qr, {
                                            name: "aiAgentMessageExamples.".concat(
                                              t,
                                              ".userAsk"
                                            ),
                                            control: n.control,
                                            render: (e) => {
                                              let { field: t } = e;
                                              return (0, l.jsx)(L, {
                                                children: (0, l.jsx)("div", {
                                                  className:
                                                    "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                                                  children: (0, l.jsx)(P.g, {
                                                    disabled: !0,
                                                    value: t.value,
                                                    onChange: (e) =>
                                                      t.onChange(
                                                        e.target.value
                                                      ),
                                                    placeholder:
                                                      "Write an example user message...",
                                                    className:
                                                      "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex disabled:opacity-100",
                                                  }),
                                                }),
                                              });
                                            },
                                          }),
                                          (0, l.jsx)(y.Qr, {
                                            name: "aiAgentMessageExamples.".concat(
                                              t,
                                              ".agentResponse"
                                            ),
                                            control: n.control,
                                            render: (e) => {
                                              let { field: t } = e;
                                              return (0, l.jsx)(L, {
                                                children: (0, l.jsx)("div", {
                                                  className:
                                                    "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                                                  children: (0, l.jsx)(P.g, {
                                                    disabled: !0,
                                                    value: t.value,
                                                    onChange: (e) =>
                                                      t.onChange(
                                                        e.target.value
                                                      ),
                                                    placeholder:
                                                      "Write the character's response...",
                                                    className:
                                                      "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex disabled:opacity-100",
                                                  }),
                                                }),
                                              });
                                            },
                                          }),
                                        ],
                                      },
                                      t
                                    )
                                  ),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [
                              (0, l.jsxs)("div", {
                                className:
                                  "h-8 flex-col justify-start items-start gap-2 inline-flex",
                                children: [
                                  (0, l.jsxs)("div", {
                                    className:
                                      "justify-start items-start gap-2 inline-flex",
                                    children: [
                                      (0, l.jsx)("div", {
                                        className:
                                          "w-6 h-6 relative overflow-hidden",
                                        children: (0, l.jsxs)("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          width: "24",
                                          height: "24",
                                          viewBox: "0 0 24 24",
                                          fill: "none",
                                          children: [
                                            (0, l.jsx)("path", {
                                              d: "M8.81931 0.1875C7.6016 6.80199 6.61444 7.7891 0 9.00681C6.61449 10.2245 7.6016 11.2116 8.81931 17.8261C10.037 11.2116 11.0241 10.2245 17.6386 9.00681C11.0241 7.7891 10.037 6.80199 8.81931 0.1875Z",
                                              fill: "#7D52F4",
                                            }),
                                            (0, l.jsx)("path", {
                                              d: "M18.3914 12.5957C17.6171 16.8023 16.9892 17.4301 12.7827 18.2044C16.9892 18.9788 17.6171 19.6067 18.3914 23.8132C19.1658 19.6067 19.7937 18.9788 24.0001 18.2044C19.7936 17.4301 19.1658 16.8023 18.3914 12.5957Z",
                                              fill: "#7D52F4",
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, l.jsx)("div", {
                                        className:
                                          "text-[#1b1b1b] text-lg font-semibold font-inter",
                                        children: "Adjectives",
                                      }),
                                    ],
                                  }),
                                  (0, l.jsx)("div", {
                                    className:
                                      "self-stretch h-[0px] rotate-180 border border-[#eaeaea]",
                                  }),
                                ],
                              }),
                              null === (t = n.watch("aiAgentAdjectives")) ||
                              void 0 === t
                                ? void 0
                                : t.map((e, t) =>
                                    (0, l.jsx)(
                                      T,
                                      {
                                        className:
                                          "h-[80px] w-full justify-start items-start gap-2 flex space-y-0",
                                        children: (0, l.jsx)(y.Qr, {
                                          name: "aiAgentAdjectives.".concat(t),
                                          control: n.control,
                                          render: (e) => {
                                            let { field: t } = e;
                                            return (0, l.jsx)(L, {
                                              children: (0, l.jsx)("div", {
                                                className:
                                                  "grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex",
                                                children: (0, l.jsx)(P.g, {
                                                  value: t.value,
                                                  onChange: (e) =>
                                                    t.onChange(e.target.value),
                                                  disabled: !0,
                                                  placeholder:
                                                    "Enter an adjective",
                                                  className:
                                                    "self-stretch grow shrink basis-0 p-4 bg-white rounded-xl disabled:opacity-100 shadow-[0px_1px_3px_-1px_rgba(103,111,128,0.06)] border border-[#eaeaea] justify-start items-start gap-2 inline-flex",
                                                }),
                                              }),
                                            });
                                          },
                                        }),
                                      },
                                      t
                                    )
                                  ),
                            ],
                          }),
                          (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => o.push("?type=my-agents"),
                            className:
                              "text-white text-base font-semibold bg-[#1B1B1B] w-full rounded-full py-3 px-6 hover:scale-105 transition-all duration-300 ease-in-out",
                            children: "Back to My Agent",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              })
            : (0, l.jsx)("div", { children: "wrong id" });
        };
      function tF() {
        return (0, l.jsx)("div", {
          className: "w-full h-full flex justify-center items-center",
          children: (0, l.jsxs)("div", {
            role: "status",
            children: [
              (0, l.jsxs)("svg", {
                "aria-hidden": "true",
                className:
                  "w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-[#ff306e]",
                viewBox: "0 0 100 101",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  (0, l.jsx)("path", {
                    d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                    fill: "currentColor",
                  }),
                  (0, l.jsx)("path", {
                    d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                    fill: "currentFill",
                  }),
                ],
              }),
              (0, l.jsx)("span", {
                className: "sr-only",
                children: "Loading...",
              }),
            ],
          }),
        });
      }
      let tE = (0, r.memo)(
          (0, c.default)(
            () =>
              Promise.all([s.e(342), s.e(9610), s.e(214), s.e(6171)]).then(
                s.bind(s, 36171)
              ),
            {
              loadableGenerated: { webpack: () => [36171] },
              loading: () => (0, l.jsx)(tF, {}),
              ssr: !1,
            }
          )
        ),
        tM = (0, c.default)(() => s.e(5609).then(s.bind(s, 45609)), {
          loadableGenerated: { webpack: () => [45609] },
          loading: () => (0, l.jsx)(tF, {}),
          ssr: !1,
        }),
        tT = (0, r.memo)(
          (0, c.default)(() => s.e(5866).then(s.bind(s, 95866)), {
            loadableGenerated: { webpack: () => [95866] },
            loading: () => (0, l.jsx)(tF, {}),
            ssr: !1,
          })
        ),
        tS = (0, r.memo)(
          (0, c.default)(
            () => Promise.all([s.e(2266), s.e(4360)]).then(s.bind(s, 64360)),
            {
              loadableGenerated: { webpack: () => [64360] },
              loading: () => (0, l.jsx)(tF, {}),
              ssr: !1,
            }
          )
        ),
        tL = (0, r.memo)(
          (0, c.default)(() => s.e(3166).then(s.bind(s, 53166)), {
            loadableGenerated: { webpack: () => [53166] },
            loading: () => (0, l.jsx)(tF, {}),
            ssr: !1,
          })
        ),
        t_ = (0, r.memo)(
          (0, c.default)(() => s.e(3683).then(s.bind(s, 43683)), {
            loadableGenerated: { webpack: () => [43683] },
            loading: () => (0, l.jsx)(tF, {}),
            ssr: !1,
          })
        ),
        tD = (0, r.memo)(
          (0, c.default)(() => s.e(2357).then(s.bind(s, 92357)), {
            loadableGenerated: { webpack: () => [92357] },
            loading: () => (0, l.jsx)(tF, {}),
            ssr: !1,
          })
        );
      var tZ = () => {
          let e = (0, x.useSearchParams)().get("type"),
            t = (0, x.useRouter)();
          return (
            null === e && t.push("?type=store"),
            (0, l.jsxs)("main", {
              className: (0, u.cn)(
                "bg-[url('/images/background-main.png')] py-6 invis-scroll w-full h-svh overflow-y-scroll overflow-x-hidden",
                { "py-0": "ai-agent-chat" === e }
              ),
              children: [
                (0, l.jsxs)(r.Suspense, {
                  fallback: (0, l.jsx)("div", { children: "Loading..." }),
                  children: [
                    ("store" === e || null === e) && (0, l.jsx)(tE, {}),
                    "my-apps" === e && (0, l.jsx)(tM, {}),
                    "my-agents" === e && (0, l.jsx)(eP, {}),
                    "view-agent" === e && (0, l.jsx)(tB, {}),
                    "create" === e && (0, l.jsx)(tT, {}),
                    "earn" === e && (0, l.jsx)(tL, {}),
                    "chat" === e && (0, l.jsx)(t_, {}),
                    "ai-agent-chat" === e && (0, l.jsx)(tS, {}),
                    "pb-apps" === e && (0, l.jsx)(tD, {}),
                    "solana-scan" === e && (0, l.jsx)(e0, {}),
                    "evm-scan" === e && (0, l.jsx)(e$, {}),
                    "crypto" === e && (0, l.jsx)(eJ, {}),
                    "song-maker" === e && (0, l.jsx)(e6, {}),
                    "deploy" === e && (0, l.jsx)(eT, {}),
                    "app" === e && (0, l.jsx)(eC, {}),
                    "stake" === e && (0, l.jsx)(tk, {}),
                    "create-agent" === e && (0, l.jsx)(eg, {}),
                  ],
                }),
                (0, l.jsx)(p.Ix, { closeButton: !1, hideProgressBar: !0 }),
              ],
            })
          );
        },
        tH = {
          src: "/_next/static/media/wallet.6addf6b8.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        tR = {
          src: "/_next/static/media/profile.4b72cbda.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        },
        tV = {
          src: "/_next/static/media/more.f76a075d.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        },
        tW = s(25524),
        tI = s(30859),
        tP = {
          createNewUser: (e) => e5.Z.post("/api/wallet", e),
          getUserInfo: (e) => e5.Z.get("/api/wallet/".concat(e)),
        };
      ((a = n || (n = {})).SUCCESS = "Wallet created successfully"),
        (a.EXIST = "Address already exist"),
        (a.FAIL = "fail");
      var tz = (e) => {
          var t;
          let { isMinimized: s } = e,
            { open: a } = (0, tC.Ig)(),
            { address: n, isConnected: i, status: d } = (0, $.m)(),
            { setUserInfo: o, userInfo: c, logOut: x } = (0, tI.L)(),
            { disconnect: u } = (0, tC.qL)(),
            p = () => {
              console.log("click logout"), i ? (u(), x()) : a();            
            },
            m = async () => {
              if (!n) return null;
              try {
                let e = await tP.getUserInfo(n);
                return o(e.data), e.data;
              } catch (e) {
                throw Error("User info not found!");
              }
            },
            {
              data: h,
              isSuccess: f,
              isError: g,
              refetch: b,
            } = (0, eD.a)({
              queryKey: ["user", n],
              queryFn: m,
              enabled: !1,
              placeholderData: eZ.Wk,
              gcTime: 36e5,
              retry: 0,
            }),
            y = (0, r.useCallback)(async () => {
              if (!n) throw Error("No address available");
              return (
                await tP.createNewUser({
                  address: n,
                  name: "Anonymous",
                  avatar: "641b04bc9745387984931f329a55569d.png",
                })
              ).data;
            }, [n]),
            { mutate: w } = (0, tW.D)({
              mutationKey: ["user", n],
              mutationFn: y,
              onSuccess: async (e) => {
                ("Wallet created successfully" === e.message ||
                  "Address already exist" === e.message) &&
                  (await b());
              },
              onError: () => {
                (0, j.R)("error", "Cannot register your account!");
              },
            });
          return (
            (0, r.useEffect)(() => {
              "disconnected" === d
                ? null !== c && x()
                : "connected" === d && b();
            }, [d]),
            (0, r.useEffect)(() => {
              g && w();
            }, [f, h, g]),
            (0, l.jsx)(l.Fragment, {
              children:
                i || null !== c
                  ? (0, l.jsxs)("button", {
                      onClick: p,
                      className:
                        "max-w-[160px] md:max-w-[224px]\n        rounded-full flex items-center justify-between  \n        ".concat(
                          s
                            ? ""
                            : "mbl:w-full pl-2 py-2 mbl:pr-4 pr-2 border border-[#D8D8D8] bg-[#FAFAFA]",
                          "\n        "
                        ),
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex gap-2 items-center w-fit",
                          children: [
                            (0, l.jsx)(v.default, {
                              src: tR,
                              width: s ? 60 : 40,
                              height: s ? 60 : 40,
                              alt: "profile icon",
                            }),
                            !s &&
                              (0, l.jsxs)("div", {
                                className:
                                  "mbl:flex flex-col items-start hidden",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[14px] leading-[20px] tracking-[-0.14px] font-semibold text-[#1B1B1B]",
                                    children: null == c ? void 0 : c.name,
                                  }),
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[12px] leading-[16px] tracking-[-0.12px] font-normal text-[#666]",
                                    children: eq(
                                      null !==
                                        (t = null == c ? void 0 : c.address) &&
                                        void 0 !== t
                                        ? t
                                        : "0x1111111111"
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        !s &&
                          (0, l.jsx)(v.default, {
                            src: tV,
                            width: 20,
                            height: 20,
                            alt: "more icon",
                            className: "mbl:block hidden",
                          }),
                      ],
                    })
                  : (0, l.jsx)("button", {
                      onClick: p,
                      className:
                        "rounded-[999px] \n            md:w-full \n            bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] p-[3px]",
                      children: (0, l.jsx)("div", {
                        className:
                          "w-full rounded-full py-3 \n          ".concat(
                            s ? "px-4" : "px-10",
                            "\n          flex justify-center items-center bg-[#1B1B1B] text-white"
                          ),
                        children: (0, l.jsxs)("div", {
                          className: "flex items-center justify-center gap-x-2",
                          children: [
                            (0, l.jsx)(v.default, {
                              src: tH,
                              alt: "wallet icon",
                              width: 20,
                              height: 20,
                              className: "shrink-0",
                            }),
                            !s &&
                              (0, l.jsx)("span", {
                                className: "text-nowrap hidden md:block",
                                children: "Connect Wallet",
                              }),
                          ],
                        }),
                      }),
                    }),
            })
          );
        },
        tU = (e) => {
          let { isActive: t } = e,
            s = t ? "#fff" : "#1b1b1b";
          return (0, l.jsxs)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: t ? "#1b1b1b" : "#fff",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              (0, l.jsx)("path", {
                d: "M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z",
                stroke: s,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, l.jsx)("path", {
                d: "M8 12H16",
                stroke: s,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              (0, l.jsx)("path", {
                d: "M12 16V8",
                stroke: s,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            ],
          });
        },
        tK = (e) => {
          let { isActive: t } = e;
          return t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    d: "M13.43 5.43V6.77C10.81 6.98 9.32 8.66 9.32 11.43V16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M18.5703 8H14.0003C11.7103 8 10.5703 9.14 10.5703 11.43V18.57C10.5703 20.86 11.7103 22 14.0003 22H18.5703C20.8603 22 22.0003 20.86 22.0003 18.57V11.43C22.0003 9.14 20.8603 8 18.5703 8ZM18.1303 15.75H17.2503V16.63C17.2503 17.04 16.9103 17.38 16.5003 17.38C16.0903 17.38 15.7503 17.04 15.7503 16.63V15.75H14.8703C14.4603 15.75 14.1203 15.41 14.1203 15C14.1203 14.59 14.4603 14.25 14.8703 14.25H15.7503V13.37C15.7503 12.96 16.0903 12.62 16.5003 12.62C16.9103 12.62 17.2503 12.96 17.2503 13.37V14.25H18.1303C18.5403 14.25 18.8803 14.59 18.8803 15C18.8803 15.41 18.5403 15.75 18.1303 15.75Z",
                    fill: "#1B1B1B",
                  }),
                ],
              })
            : (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsxs)("g", {
                    "clip-path": "url(#clip0_16113_5643)",
                    children: [
                      (0, l.jsx)("path", {
                        d: "M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43",
                        stroke: "#1B1B1B",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, l.jsx)("path", {
                        d: "M18.5703 22H14.0003C11.7103 22 10.5703 20.86 10.5703 18.57V11.43C10.5703 9.14 11.7103 8 14.0003 8H18.5703C20.8603 8 22.0003 9.14 22.0003 11.43V18.57C22.0003 20.86 20.8603 22 18.5703 22Z",
                        stroke: "#1B1B1B",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, l.jsx)("path", {
                        d: "M14.8691 15H18.1291",
                        stroke: "#1B1B1B",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                      (0, l.jsx)("path", {
                        d: "M16.5 16.6301V13.3701",
                        stroke: "#1B1B1B",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    ],
                  }),
                  (0, l.jsx)("defs", {
                    children: (0, l.jsx)("clipPath", {
                      id: "clip0_16113_5643",
                      children: (0, l.jsx)("rect", {
                        width: "24",
                        height: "24",
                        fill: "white",
                      }),
                    }),
                  }),
                ],
              });
        },
        tG = (e) => {
          let { isActive: t } = e,
            s = t ? "#fff" : "#1b1b1b";
          return (0, l.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: t ? "#1b1b1b" : "#fff",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsxs)("g", {
              id: "vuesax/linear/coin",
              children: [
                (0, l.jsx)("path", {
                  id: "Vector",
                  d: "M18.5 12.65V16.35C18.5 19.47 15.59 22 12 22C8.41 22 5.5 19.47 5.5 16.35V12.65C5.5 15.77 8.41 18 12 18C15.59 18 18.5 15.77 18.5 12.65Z",
                  stroke: s,
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, l.jsx)("path", {
                  id: "Vector_2",
                  d: "M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z",
                  stroke: s,
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                (0, l.jsx)("path", {
                  id: "Vector_3",
                  d: "M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z",
                  stroke: s,
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          });
        },
        tO = (e) => {
          let { isActive: t } = e;
          return t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    d: "M2 6.21053C2 4.22567 2 3.23323 2.65901 2.61662C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.61662C11 3.23323 11 4.22567 11 6.21053V17.7895C11 19.7743 11 20.7668 10.341 21.3834C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.3834C2 20.7668 2 19.7743 2 17.7895V6.21053Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M13 15.4C13 13.3258 13 12.2887 13.659 11.6444C14.318 11 15.3787 11 17.5 11C19.6213 11 20.682 11 21.341 11.6444C22 12.2887 22 13.3258 22 15.4V17.6C22 19.6742 22 20.7113 21.341 21.3556C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.3556C13 20.7113 13 19.6742 13 17.6V15.4Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M13 5.5C13 4.4128 13 3.8692 13.1713 3.44041C13.3996 2.86867 13.8376 2.41443 14.389 2.17761C14.8024 2 15.3266 2 16.375 2H18.625C19.6734 2 20.1976 2 20.611 2.17761C21.1624 2.41443 21.6004 2.86867 21.8287 3.44041C22 3.8692 22 4.4128 22 5.5C22 6.5872 22 7.1308 21.8287 7.55959C21.6004 8.13133 21.1624 8.58557 20.611 8.82239C20.1976 9 19.6734 9 18.625 9H16.375C15.3266 9 14.8024 9 14.389 8.82239C13.8376 8.58557 13.3996 8.13133 13.1713 7.55959C13 7.1308 13 6.5872 13 5.5Z",
                    fill: "#1B1B1B",
                  }),
                ],
              })
            : (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    d: "M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5V17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5V6.5Z",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                  (0, l.jsx)("path", {
                    d: "M13.5 15.5C13.5 13.6144 13.5 12.6716 14.0858 12.0858C14.6716 11.5 15.6144 11.5 17.5 11.5C19.3856 11.5 20.3284 11.5 20.9142 12.0858C21.5 12.6716 21.5 13.6144 21.5 15.5V17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5V15.5Z",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                  (0, l.jsx)("path", {
                    d: "M13.5 5.5C13.5 4.56812 13.5 4.10218 13.6522 3.73463C13.8552 3.24458 14.2446 2.85523 14.7346 2.65224C15.1022 2.5 15.5681 2.5 16.5 2.5H18.5C19.4319 2.5 19.8978 2.5 20.2654 2.65224C20.7554 2.85523 21.1448 3.24458 21.3478 3.73463C21.5 4.10218 21.5 4.56812 21.5 5.5C21.5 6.43188 21.5 6.89782 21.3478 7.26537C21.1448 7.75542 20.7554 8.14477 20.2654 8.34776C19.8978 8.5 19.4319 8.5 18.5 8.5H16.5C15.5681 8.5 15.1022 8.5 14.7346 8.34776C14.2446 8.14477 13.8552 7.75542 13.6522 7.26537C13.5 6.89782 13.5 6.43188 13.5 5.5Z",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                ],
              });
        },
        tX = (e) => {
          let { isActive: t } = e;
          return t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M17.5 2.75C17.9142 2.75 18.25 3.08579 18.25 3.5V5.75H20.5C20.9142 5.75 21.25 6.08579 21.25 6.5C21.25 6.91421 20.9142 7.25 20.5 7.25H18.25V9.5C18.25 9.91421 17.9142 10.25 17.5 10.25C17.0858 10.25 16.75 9.91421 16.75 9.5V7.25H14.5C14.0858 7.25 13.75 6.91421 13.75 6.5C13.75 6.08579 14.0858 5.75 14.5 5.75H16.75V3.5C16.75 3.08579 17.0858 2.75 17.5 2.75Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M2 6.5C2 4.37868 2 3.31802 2.65901 2.65901C3.31802 2 4.37868 2 6.5 2C8.62132 2 9.68198 2 10.341 2.65901C11 3.31802 11 4.37868 11 6.5C11 8.62132 11 9.68198 10.341 10.341C9.68198 11 8.62132 11 6.5 11C4.37868 11 3.31802 11 2.65901 10.341C2 9.68198 2 8.62132 2 6.5Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M13 17.5C13 15.3787 13 14.318 13.659 13.659C14.318 13 15.3787 13 17.5 13C19.6213 13 20.682 13 21.341 13.659C22 14.318 22 15.3787 22 17.5C22 19.6213 22 20.682 21.341 21.341C20.682 22 19.6213 22 17.5 22C15.3787 22 14.318 22 13.659 21.341C13 20.682 13 19.6213 13 17.5Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M2 17.5C2 15.3787 2 14.318 2.65901 13.659C3.31802 13 4.37868 13 6.5 13C8.62132 13 9.68198 13 10.341 13.659C11 14.318 11 15.3787 11 17.5C11 19.6213 11 20.682 10.341 21.341C9.68198 22 8.62132 22 6.5 22C4.37868 22 3.31802 22 2.65901 21.341C2 20.682 2 19.6213 2 17.5Z",
                    fill: "#1B1B1B",
                  }),
                ],
              })
            : (0, l.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, l.jsxs)("g", {
                  id: "Widget Add",
                  children: [
                    (0, l.jsx)("path", {
                      id: "Vector",
                      d: "M14.5 6.5H17.5M17.5 6.5H20.5M17.5 6.5V9.5M17.5 6.5V3.5",
                      stroke: "#1B1B1B",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                    (0, l.jsx)("path", {
                      id: "Rectangle 1880",
                      d: "M2.5 6.5C2.5 4.61438 2.5 3.67157 3.08579 3.08579C3.67157 2.5 4.61438 2.5 6.5 2.5C8.38562 2.5 9.32843 2.5 9.91421 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5C4.61438 10.5 3.67157 10.5 3.08579 9.91421C2.5 9.32843 2.5 8.38562 2.5 6.5Z",
                      stroke: "#1B1B1B",
                      strokeWidth: "1.5",
                    }),
                    (0, l.jsx)("path", {
                      id: "Rectangle 1884",
                      d: "M13.5 17.5C13.5 15.6144 13.5 14.6716 14.0858 14.0858C14.6716 13.5 15.6144 13.5 17.5 13.5C19.3856 13.5 20.3284 13.5 20.9142 14.0858C21.5 14.6716 21.5 15.6144 21.5 17.5C21.5 19.3856 21.5 20.3284 20.9142 20.9142C20.3284 21.5 19.3856 21.5 17.5 21.5C15.6144 21.5 14.6716 21.5 14.0858 20.9142C13.5 20.3284 13.5 19.3856 13.5 17.5Z",
                      stroke: "#1B1B1B",
                      strokeWidth: "1.5",
                    }),
                    (0, l.jsx)("path", {
                      id: "Rectangle 1883",
                      d: "M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z",
                      stroke: "#1B1B1B",
                      strokeWidth: "1.5",
                    }),
                  ],
                }),
              });
        },
        tJ = (e) => {
          let { isActive: t } = e;
          return t
            ? (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    d: "M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2 8C2 8.49355 2.99294 8.89073 4.97883 9.68508L7.7873 10.8085C9.77318 11.6028 10.7661 12 12 12C13.2339 12 14.2268 11.6028 16.2127 10.8085L19.0212 9.68508C21.0071 8.89073 22 8.49355 22 8C22 7.50645 21.0071 7.10927 19.0212 6.31492L16.2127 5.19153C14.2268 4.39718 13.2339 4 12 4C10.7661 4 9.77318 4.39718 7.7873 5.19153L4.97883 6.31492C2.99294 7.10927 2 7.50645 2 8Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M19.0212 13.6851L16.2127 14.8085C14.2268 15.6028 13.2339 16 12 16C10.7661 16 9.77318 15.6028 7.7873 14.8085L4.97883 13.6851C2.99294 12.8907 2 12.4935 2 12C2 11.5551 2.80681 11.1885 4.42043 10.5388L7.56143 11.7952C9.41007 12.535 10.572 13 12 13C13.428 13 14.5899 12.535 16.4386 11.7952L19.5796 10.5388C21.1932 11.1885 22 11.5551 22 12C22 12.4935 21.0071 12.8907 19.0212 13.6851Z",
                    fill: "#1B1B1B",
                  }),
                  (0, l.jsx)("path", {
                    d: "M19.0212 17.6849L16.2127 18.8083C14.2268 19.6026 13.2339 19.9998 12 19.9998C10.7661 19.9998 9.77318 19.6026 7.7873 18.8083L4.97883 17.6849C2.99294 16.8905 2 16.4934 2 15.9998C2 15.5549 2.80681 15.1883 4.42043 14.5386L7.56143 15.795C9.41007 16.5348 10.572 16.9998 12 16.9998C13.428 16.9998 14.5899 16.5348 16.4386 15.795L19.5796 14.5386C21.1932 15.1883 22 15.5549 22 15.9998C22 16.4934 21.0071 16.8905 19.0212 17.6849Z",
                    fill: "#1B1B1B",
                  }),
                ],
              })
            : (0, l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [
                  (0, l.jsx)("path", {
                    d: "M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                  (0, l.jsx)("path", {
                    d: "M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                  (0, l.jsx)("path", {
                    d: "M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C13.2339 20 14.2268 19.6028 16.2127 18.8085L19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14",
                    stroke: "#1B1B1B",
                    strokeWidth: "1.5",
                  }),
                ],
              });
        },
        tq = (e) => {
          let { isActive: t } = e;
          return t
            ? (0, l.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: (0, l.jsx)("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M5.57434 4.69147C4.74117 5.38295 4.52171 6.55339 4.0828 8.89427L3.3328 12.8943C2.7156 16.186 2.40701 17.8318 3.30672 18.9159C4.20644 20 5.88097 20 9.23003 20H14.7709C18.12 20 19.7945 20 20.6942 18.9159C21.5939 17.8318 21.2853 16.186 20.6681 12.8943L19.9181 8.89427C19.4792 6.55339 19.2598 5.38295 18.4266 4.69147C17.5934 4 16.4026 4 14.0209 4H9.98003C7.59835 4 6.40752 4 5.57434 4.69147ZM9.87871 7.75007C10.1879 8.62497 11.0224 9.25 12.0009 9.25C12.9794 9.25 13.8138 8.62497 14.123 7.75007C14.2611 7.35953 14.6896 7.15483 15.0801 7.29287C15.4706 7.43091 15.6753 7.8594 15.5373 8.24993C15.0229 9.70541 13.6348 10.75 12.0009 10.75C10.3669 10.75 8.97888 9.70541 8.46445 8.24993C8.32641 7.8594 8.5311 7.43091 8.92164 7.29287C9.31218 7.15483 9.74067 7.35953 9.87871 7.75007Z",
                  fill: "#1B1B1B",
                }),
              })
            : (0, l.jsx)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, l.jsxs)("g", {
                  id: "Bag 3",
                  children: [
                    (0, l.jsx)("path", {
                      id: "Vector",
                      d: "M3.74157 18.5545C4.94119 20 7.17389 20 11.6393 20H12.3605C16.8259 20 19.0586 20 20.2582 18.5545M3.74157 18.5545C2.54194 17.1091 2.9534 14.9146 3.77633 10.5257C4.36155 7.40452 4.65416 5.84393 5.76506 4.92196M3.74157 18.5545C3.74156 18.5545 3.74157 18.5545 3.74157 18.5545ZM20.2582 18.5545C21.4578 17.1091 21.0464 14.9146 20.2235 10.5257C19.6382 7.40452 19.3456 5.84393 18.2347 4.92196M20.2582 18.5545C20.2582 18.5545 20.2582 18.5545 20.2582 18.5545ZM18.2347 4.92196C17.1238 4 15.5361 4 12.3605 4H11.6393C8.46374 4 6.87596 4 5.76506 4.92196M18.2347 4.92196C18.2347 4.92196 18.2347 4.92196 18.2347 4.92196ZM5.76506 4.92196C5.76506 4.92196 5.76506 4.92196 5.76506 4.92196Z",
                      stroke: "#1b1b1b",
                      strokeWidth: "1.5",
                    }),
                    (0, l.jsx)("path", {
                      id: "Vector_2",
                      d: "M9.1709 8C9.58273 9.16519 10.694 10 12.0002 10C13.3064 10 14.4177 9.16519 14.8295 8",
                      stroke: "#1b1b1b",
                      strokeWidth: "1.5",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
              });
        };
      let tQ = (e) => {
        let { index: t, isActive: s } = e,
          a = {
            0: (0, l.jsx)(tq, { isActive: s }),
            1: (0, l.jsx)(tO, { isActive: s }),
            2: (0, l.jsx)(tU, { isActive: s }),
            3: (0, l.jsx)(tK, { isActive: s }),
            4: (0, l.jsx)(tX, { isActive: s }),
            5: (0, l.jsx)(tJ, { isActive: s }),
            6: (0, l.jsx)(tG, { isActive: s }),
          };
        return (0, l.jsx)(l.Fragment, { children: a[t] });
      };
      var tY = {
          src: "/_next/static/media/collapse.e5af5b71.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        t$ = {
          src: "/_next/static/media/logo.e4d09b78.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        t1 = (e) => {
          let { isMinimized: t, setIsMinimized: s } = e,
            a = (0, x.useSearchParams)().get("type"),
            n = (0, x.useRouter)();
          (0, r.useEffect)(() => {
            let e = () => {
              s(window.innerWidth < 768);
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [s]);
          let d = (e) => {
              let t = i[e].hash;
              n.push("?type=".concat(t));
            },
            o = (e) => a === e;
          return (0, l.jsxs)("section", {
            className:
              "border-r-2 border-[#F5F5F7]\n    py-8 bg-[#FFF] h-svh lg:flex flex-col justify-between\n    transition-all duration-300 ease-in-out\n    ".concat(
                t
                  ? "md:w-[104px] w-0 md:overflow-visible overflow-hidden"
                  : "w-[272px]",
                "\n      absolute top-0 left-0 md:relative\n      z-50\n    "
              ),
            children: [
              (0, l.jsxs)("div", {
                className: "w-full relative",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "w-full flex items-center justify-between relative",
                    children: [
                      (0, l.jsxs)("div", {
                        className:
                          "flex items-center justify-center cursor-pointer\n            ".concat(
                            t
                              ? "justify-center w-full"
                              : "ml-6 justify-start gap-x-3",
                            "\n            "
                          ),
                        children: [
                          (0, l.jsx)("figure", {
                            children: (0, l.jsx)(v.default, {
                              src: t$,
                              alt: "icon logo",
                              width: 32,
                              height: 32,
                            }),
                          }),
                          (0, l.jsxs)("span", {
                            className:
                              "\n                lg:text-[24px] overflow-hidden font-semibold text-primary-black font-neueHass text-nowrap\n                ".concat(
                                t ? "w-0" : "w-[101px]",
                                "\n                transition-all duration-300 ease-in-out\n                "
                              ),
                            children: ["Xetra AI", " "],
                          }),
                        ],
                      }),
                      (0, l.jsx)("button", {
                        className:
                          "absolute transition-all duration-300 ease-in-out bg-white\n            ".concat(
                            t
                              ? " translate-x-1/2 right-0 rotate-180"
                              : "right-6",
                            "\n            "
                          ),
                        onClick: () => s(!t),
                        children: (0, l.jsx)(v.default, {
                          src: tY,
                          alt: "collapse icon",
                          width: 32,
                          height: 32,
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full pr-6",
                    children: (0, l.jsx)("div", {
                      className: "mt-10 relative z-[2] w-full",
                      children: i.map((e, s) =>
                        (0, l.jsxs)(
                          "button",
                          {
                            onClick: () => d(s),
                            className:
                              "w-full flex cursor-pointer mb-2 items-center gap-x-5",
                            children: [
                              (0, l.jsx)("div", {
                                className:
                                  "w-2 h-11 rounded-r-[3px] shrink-0\n                ".concat(
                                    o(e.hash)
                                      ? "bg-[#1B1B1B]"
                                      : "bg-transparent",
                                    "\n                "
                                  ),
                              }),
                              (0, l.jsxs)("div", {
                                className:
                                  "\n                    w-full flex items-center py-3 px-4 h-[48px] rounded-lg\n                    "
                                    .concat(
                                      o(e.hash)
                                        ? "bg-[rgba(27,27,27,0.05)]"
                                        : "bg-transparent",
                                      "\n                    "
                                    )
                                    .concat(
                                      t
                                        ? "justify-start"
                                        : "justify-start gap-x-2.5 ",
                                      "\n                    "
                                    ),
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "shrink-0",
                                    children: (0, l.jsx)(tQ, {
                                      index: s,
                                      isActive: e.hash === a,
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className:
                                      "text-[#1B1B1B] text-[14px] leading-[20px] tracking-[-0.14px] font-semibold text-nowrap text-left\n                    ".concat(
                                        t ? "w-0" : "w-[158px]",
                                        "\n                    overflow-hidden transition-all duration-100 ease-in-out\n                    "
                                      ),
                                    children: e.title,
                                  }),
                                ],
                              }),
                            ],
                          },
                          s
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "w-full px-6 relative z-[2]",
                children: (0, l.jsx)(tz, { isMinimized: t }),
              }),
            ],
          });
        },
        t0 = {
          src: "/_next/static/media/Hamburger Menu.c3aff101.svg",
          height: 40,
          width: 40,
          blurWidth: 0,
          blurHeight: 0,
        };
      function t2(e) {
        let { setIsMinimized: t } = e;
        return (0, l.jsxs)("div", {
          className: "p-4 flex items-center justify-between md:hidden w-full",
          children: [
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between gap-[14px]",
              children: [
                (0, l.jsx)("button", {
                  onClick: () => t(!1),
                  children: (0, l.jsx)(v.default, {
                    src: t0,
                    alt: "Hamburger Icon",
                    width: 40,
                    height: 40,
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, l.jsx)(v.default, {
                      src: t$,
                      alt: "icon logo",
                      width: 32,
                      height: 32,
                    }),
                    (0, l.jsx)("div", {
                      className:
                        "text-[24px] leading-normal font-semibold text-primary-black font-neueHass",
                      children: "Xetra AI",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(tz, {}),
          ],
        });
      }
      var t5 = {
          src: "/_next/static/media/token.b84a572a.svg",
          height: 49,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        t3 = () =>
          (0, l.jsxs)("div", {
            className: "flex flex-col gap-8 py-12 items-center",
            children: [
              (0, l.jsxs)("div", {
                className: "w-[100px] h-[100px] relative",
                children: [
                  (0, l.jsx)(v.default, {
                    src: t5,
                    alt: "Token",
                    width: 48,
                    height: 48,
                    className:
                      "absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                  }),
                  (0, l.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 100 100",
                    className: "w-full h-full animate-spin",
                    children: [
                      (0, l.jsx)("path", {
                        d: "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50ZM8 50C8 73.196 26.804 92 50 92C73.196 92 92 73.196 92 50C92 26.804 73.196 8 50 8C26.804 8 8 26.804 8 50Z",
                        fill: "#FFECC0",
                      }),
                      (0, l.jsx)("path", {
                        d: "M96 50C98.2091 50 100.017 51.7938 99.8401 53.9958C99.1074 63.1369 95.8712 71.9288 90.4509 79.3893C84.2444 87.9316 75.493 94.2899 65.4509 97.5528C55.4087 100.816 44.5913 100.816 34.5491 97.5528C24.507 94.2899 15.7556 87.9316 9.54915 79.3893C3.34275 70.8469 -9.23094e-07 60.559 0 50C9.23094e-07 39.441 3.34275 29.1531 9.54915 20.6107C15.7556 12.0684 24.507 5.71007 34.5492 2.44717C43.3195 -0.402481 52.6811 -0.763387 61.6012 1.36445C63.75 1.87705 64.8975 4.15039 64.2148 6.2514C63.5321 8.35242 61.2777 9.48216 59.1213 9.00238C51.8167 7.37716 44.1842 7.72824 37.0213 10.0556C28.5859 12.7965 21.2347 18.1374 16.0213 25.313C10.8079 32.4886 8 41.1305 8 50C8 58.8695 10.8079 67.5114 16.0213 74.687C21.2347 81.8626 28.5859 87.2035 37.0213 89.9444C45.4567 92.6852 54.5433 92.6852 62.9787 89.9444C71.4141 87.2035 78.7653 81.8626 83.9787 74.687C88.4057 68.5938 91.0981 61.4434 91.8097 53.9941C92.0198 51.795 93.7909 50 96 50Z",
                        fill: "#F6B51E",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-2 items-center",
                children: [
                  (0, l.jsx)("h1", {
                    className: "text-[#1B1B1B] text-2xl font-semibold",
                    children: "Staking $XETRA",
                  }),
                  (0, l.jsx)("span", {
                    className: "text-sm text-[#666666] text-center",
                    children:
                      "Lock tokens, support the network, and let AI dApps earn you passive income effortlessly!",
                  }),
                ],
              }),
            ],
          }),
        t6 = JSON.parse(
          '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]'
        ),
        t4 = s(17439),
        t8 = s(58090),
        t9 = s(90143),
        t7 = s(52684),
        se = s(61183),
        st = {
          src: "/_next/static/media/default-logo.020c4795.png",
          height: 120,
          width: 120,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAElBMVEX/GXRMaXH/Lm7/MHD/LW/+LW3ZlPpaAAAABnRSTlMNAHP2dXAYtujQAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAK0lEQVR4nDWLQQoAAAjCptb/vxwFXSY4RQKQ0HEDqpbIibdQJ30G+8yP/z4IiwA7bcp6GAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        ss = {
          src: "/_next/static/media/success.1484e33c.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        },
        sa = s(87138),
        sn = {
          src: "/_next/static/media/fail.eb25624b.svg",
          height: 100,
          width: 100,
          blurWidth: 0,
          blurHeight: 0,
        },
        sl = s(11083),
        si = s(8681),
        sr = s(55820),
        sd = (e) => {
          let { categories: t, setField: s, error: a } = e,
            [n, i] = (0, r.useState)(""),
            d = (e) => {
              s(
                "categories",
                t.filter((t, s) => s !== e)
              );
            };
          return (0, l.jsxs)("div", {
            className: "mt-6",
            children: [
              (0, l.jsxs)("div", {
                className: "flex justify-between mb-2",
                children: [
                  (0, l.jsx)("label", {
                    className:
                      "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                    children: "Categories",
                  }),
                  (0, l.jsxs)("span", {
                    className: "text-xs text-gray-500",
                    children: [t.length, "/7"],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "w-full p-3 bg-[#F5F5F7] rounded-xl min-h-[48px]",
                children: [
                  (0, l.jsx)("div", {
                    className: "flex flex-wrap gap-2 mb-2",
                    children: t.map((e, t) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center gap-1 px-3 py-1 bg-pink-100 rounded-full",
                          children: [
                            (0, l.jsx)("span", {
                              className: "text-sm",
                              children: e,
                            }),
                            (0, l.jsx)("button", {
                              type: "button",
                              onClick: () => d(t),
                              className:
                                "ml-1 text-gray-500 hover:text-gray-700",
                              children: "\xd7",
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  (0, l.jsx)("input", {
                    type: "text",
                    value: n,
                    onChange: (e) => {
                      i(e.target.value);
                    },
                    onKeyDown: (e) => {
                      if (("Enter" === e.key || "," === e.key) && !e.shiftKey) {
                        e.preventDefault();
                        let a = n.trim();
                        a &&
                          t.length < 7 &&
                          (s("categories", [...t, a]), i(""));
                      }
                    },
                    placeholder:
                      t.length >= 7
                        ? "Maximum categories reached"
                        : "Type and press Enter to add categories",
                    disabled: t.length >= 7,
                    className:
                      "w-full bg-transparent text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                  }),
                ],
              }),
              a &&
                (0, l.jsx)("p", {
                  className: "text-red-500 text-xs mt-1",
                  children: a,
                }),
            ],
          });
        };
      let so = {
        credits: function () {
          let e = [
              { icon: t7.Z, title: "Explore", price: 9, credits: 225 },
              { icon: t9.Z, title: "Innovator", price: 19, credits: 475 },
              { icon: t8.Z, title: "Creator", price: 29, credits: 725 },
            ],
            [t, s] = (0, r.useState)(e[0]);
          return (0, l.jsxs)("div", {
            className: "flex flex-col items-center w-full py-10",
            children: [
              (0, l.jsx)("div", {
                className:
                  "text-[24px] tracking-[-0.48px] md:text-[32px] md:tracking-[-0.8px] font-semibold leading-normal text-primary-black",
                children: "Choose a Credit Package to Keep Going",
              }),
              (0, l.jsx)("div", {
                className:
                  "mt-6 text-left md:mt-4 md:text-center text-[#666] text-[18px] tracking-[-0.18px] leading-normal",
                children:
                  "You're out of credit. Pick the package that works best for you and get\n        back on track in no time!",
              }),
              (0, l.jsx)("div", {
                className:
                  "mt-6 flex flex-col w-full md:mt-8 md:flex-row items-center justify-center gap-6",
                children: e.map((e, a) =>
                  (0, l.jsx)(
                    "div",
                    {
                      className: "w-full",
                      onClick: () => s(e),
                      children: (0, l.jsx)(
                        se.Z,
                        {
                          id: a + 1,
                          icon: e.icon,
                          title: e.title,
                          price: String(e.price),
                          credits: String(e.credits),
                          active: t.title === e.title,
                        },
                        a
                      ),
                    },
                    a
                  )
                ),
              }),
            ],
          });
        },
        publish: function () {
          let {
              title: e,
              description: t,
              categories: s,
              imgUrl: a,
              setField: n,
              reset: i,
              id: d,
            } = (0, eR.t)(),
            { close: o } = (0, tv.b)(),
            [c, x] = (0, r.useState)(0),
            [u, p] = (0, r.useState)(0),
            [m, h] = (0, r.useState)(""),
            [f, g] = (0, r.useState)({
              title: "",
              description: "",
              categories: "",
              image: "",
            }),
            b = (0, r.useRef)(null),
            y = (0, r.useRef)(null),
            [w, C] = (0, r.useState)(!1),
            A = () => {
              let n = { title: "", description: "", categories: "", image: "" };
              e.trim()
                ? e.length < 3 &&
                  (n.title = "Title must be at least 3 characters")
                : (n.title = "Title is required"),
                t.trim()
                  ? t.length < 10 &&
                    (n.description =
                      "Description must be at least 10 characters")
                  : (n.description = "Description is required"),
                0 === s.length &&
                  (n.categories = "At least one category is required"),
                a || (n.image = "Cover image is required"),
                g(n);
              let l = Object.values(n).every((e) => !e);
              return C(l), l;
            };
          (0, r.useEffect)(() => {
            A();
          }, [e, t, s, a]);
          let N = async (e) => {
              var t;
              let s =
                null === (t = e.target.files) || void 0 === t ? void 0 : t[0];
              if (s) {
                if (s.size > 2097152) {
                  g((e) => ({
                    ...e,
                    image: "File size should not exceed 2MB",
                  }));
                  return;
                }
                if (
                  ![
                    "image/png",
                    "image/jpeg",
                    "image/jpg",
                    "image/gif",
                  ].includes(s.type)
                ) {
                  g((e) => ({
                    ...e,
                    image: "Please upload PNG, JPG, JPEG, or GIF files only",
                  }));
                  return;
                }
                n("imgUrl", URL.createObjectURL(s)),
                  g((e) => ({ ...e, image: "" }));
              }
            },
            k = async (e) => {
              e.preventDefault(), A() && B();
            },
            B = async () => {
              try {
                await (0, ev.vj)(d, {
                  title: e,
                  description: t,
                  categories: [0, 1],
                  logo: "logo",
                  cover: "cover",
                }),
                  (0, j.R)("update", "App in review!"),
                  n("isPublished", !0);
              } catch (e) {
                console.log(e), (0, j.R)("error", "Failed to publish app");
              }
              i(), o();
            };
          return (0, l.jsxs)("div", {
            className: "w-full mx-auto",
            children: [
              (0, l.jsx)("div", {
                className: "flex items-center justify-between mb-6",
                children: (0, l.jsxs)("h2", {
                  className: "md:text-xl text-base font-semibold",
                  children: ["Publish my AI App ", e],
                }),
              }),
              (0, l.jsxs)("form", {
                ref: y,
                onSubmit: k,
                className: "mt-10",
                onKeyDown: (e) => {
                  "Enter" === e.key &&
                    e.target instanceof HTMLInputElement &&
                    e.preventDefault();
                },
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex items-center justify-start gap-5 md:flex-row flex-col",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "flex items-center justify-center w-[120px] h-[120px] rounded-full shrink-0",
                        children: a
                          ? (0, l.jsx)("img", {
                              src: a,
                              alt: "Cover",
                              className:
                                "w-full h-full object-cover rounded-full",
                            })
                          : (0, l.jsx)(v.default, { src: st, alt: "Cover" }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex-col flex md:items-start items-center",
                        children: [
                          (0, l.jsx)("p", {
                            className:
                              "md:text-left text-center text-[16px] leading-6 font-semibold text-primary-black tracking-[-0.16px] mb-2",
                            children: "Upload Cover",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "md:text-left text-center text-[14px] leading-5 text-[#666] tracking-[-0.21px] max-w-[344px] mb-5",
                            children:
                              "Image size should not exceed 2MB, supported file types: .png, .jpg, .jpeg, .gif",
                          }),
                          (0, l.jsx)("input", {
                            type: "file",
                            ref: b,
                            onChange: N,
                            accept: ".png,.jpg,.jpeg,.gif",
                            className: "hidden",
                          }),
                          (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => {
                              var e;
                              return null === (e = b.current) || void 0 === e
                                ? void 0
                                : e.click();
                            },
                            className:
                              "text-[14px] leading-5 font-semibold tracking-[-0.14px] md:mx-0 px-4 py-2 text-primary-black bg-white border border-[#D8D8D8] rounded-full hover:bg-gray-50",
                            children: "Upload Image",
                          }),
                          f.image &&
                            (0, l.jsx)("p", {
                              className: "text-red-500 text-xs mt-1",
                              children: f.image,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex justify-between mb-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                            children: "Title",
                          }),
                          (0, l.jsxs)("span", {
                            className: "text-xs text-gray-500",
                            children: [c, "/100"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("input", {
                        type: "text",
                        value: e,
                        onChange: (e) => {
                          let t = e.target.value;
                          t.length <= 100 && (n("title", t), x(t.length));
                        },
                        placeholder: "Please enter no more than 100 words",
                        className:
                          "w-full p-3 bg-[#F5F5F7] rounded-xl text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                      }),
                      f.title &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: f.title,
                        }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex justify-between mb-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                            children: "Description",
                          }),
                          (0, l.jsxs)("span", {
                            className: "text-xs text-gray-500",
                            children: [u, "/100"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("textarea", {
                        value: t,
                        onChange: (e) => {
                          let t = e.target.value;
                          t.length <= 100 && (n("description", t), p(t.length));
                        },
                        placeholder: "Please enter no more than 100 words",
                        rows: 4,
                        className:
                          "w-full p-3 bg-[#F5F5F7] rounded-xl h-[88px] text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                      }),
                      f.description &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: f.description,
                        }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex justify-between mb-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                            children: "Categories",
                          }),
                          (0, l.jsxs)("span", {
                            className: "text-xs text-gray-500",
                            children: [s.length, "/7"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("input", {
                        type: "text",
                        value: m,
                        onChange: (e) => {
                          let t = e.target.value;
                          h(t);
                          let s = t
                            .split(",")
                            .map((e) => e.trim())
                            .filter(Boolean);
                          s.length <= 7 && n("categories", s);
                        },
                        placeholder: "Enter categories separated by commas",
                        className:
                          "w-full p-3 bg-[#F5F5F7] rounded-xl text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                      }),
                      f.categories &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: f.categories,
                        }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full flex items-center justify-end mt-10",
                    children: (0, l.jsx)("button", {
                      type: "submit",
                      disabled: !w,
                      className:
                        "px-6 py-3 text-white rounded-full text-[16px] leading-6 tracking-[-0.16px] transition-colors duration-200 ease-in-out\n              ".concat(
                          w
                            ? "bg-[#1B1B1B] hover:bg-[#000000]"
                            : "bg-[#D8D8D8] cursor-not-allowed"
                        ),
                      children: "Publish",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        settings: () => (0, l.jsx)("div", { children: "Settings Content" }),
        stakeDetail: () => {
          let { amount: e, setField: t, isLoading: s } = tw(),
            { close: a, open: n } = (0, tv.b)(),
            {
              stake: i,
              isLoading: d,
              reset: o,
              txHash: c,
            } = (function (e) {
              let { onSuccess: t, onError: s } = e,
                [a, n] = (0, r.useState)({
                  isLoading: !1,
                  isSuccess: !1,
                  error: null,
                  txHash: null,
                }),
                { writeContractAsync: l } = (0, eB.S)(),
                { data: i } = (0, ts.V)({
                  hash: null == a ? void 0 : a.txHash,
                });
              return (
                (0, r.useEffect)(() => {
                  (null == i ? void 0 : i.status) === "success" &&
                    (null == t || t());
                }, [i]),
                {
                  stake: (0, r.useCallback)(
                    async (e) => {
                      try {
                        n({
                          isLoading: !0,
                          isSuccess: !1,
                          error: null,
                          txHash: null,
                        });
                        let t = (0, t4.v)(e.toString(), 9),
                          s = await l({
                            abi: t6,
                            address: e7.MockToken,
                            functionName: "approve",
                            args: [e7.MockAddress, t],
                          });
                        console.log("approvalTx", s),
                          await new Promise((e) => setTimeout(e, 2e3));
                        let a = await l({
                          address: e7.MockAddress,
                          abi: te,
                          functionName: "stake",
                          args: [t],
                        });
                        n((e) => ({ ...e, isLoading: !1, txHash: a }));
                      } catch (e) {
                        n((t) => ({ ...t, isLoading: !1, error: e })),
                          null == s || s(e);
                      }
                    },
                    [l, s]
                  ),
                  reset: (0, r.useCallback)(() => {
                    n({
                      isLoading: !1,
                      isSuccess: !1,
                      error: null,
                      txHash: null,
                    });
                  }, []),
                  ...a,
                }
              );
            })({
              onSuccess: () => {
                a(), t("isLoading", !1), t("txHash", c), n("stakeSuccess");
              },
              onError: (e) => {
                a(), t("isLoading", !1), n("stakeFail"), o();
              },
            });
          return s
            ? (0, l.jsx)(t3, {})
            : (0, l.jsxs)("div", {
                className: "flex flex-col gap-8",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex flex-col gap-4 items-center",
                    children: [
                      (0, l.jsx)(v.default, { src: t5, alt: "Token" }),
                      (0, l.jsx)("div", {
                        className: "flex flex-col items-center gap-0",
                        children: (0, l.jsxs)("h1", {
                          className: "text-[32px] font-semibold text-[#1B1B1B]",
                          children: [
                            Number(e).toLocaleString(void 0, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 3,
                            }),
                            " $XETRA",
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      { title: "APY", value: "10%" },
                      { title: "FEE", value: "1%" },
                    ].map((e, t) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className: "flex justify-between gap-1 items-center",
                          children: [
                            (0, l.jsx)("span", {
                              className: "text-[#666666] text-sm",
                              children: e.title,
                            }),
                            (0, l.jsx)("span", {
                              className: "text-[#1B1B1B] text-xl font-semibold",
                              children: e.value,
                            }),
                          ],
                        },
                        t
                      )
                    ),
                  }),
                  (0, l.jsx)("button", {
                    disabled: d,
                    onClick: () => {
                      t("isLoading", !0), i(e);
                    },
                    className: (0, u.cn)(
                      "rounded-2xl py-4 bg-[linear-gradient(91deg,#FACC69_-0.26%,#FF8965_100.36%)] shadow-[0px_7px_10px_0px_rgba(255,48,110,0.10),1px 1px_8px_0px_rgba(253,255,236,0.49)_inset]",
                      { "opacity-50": d }
                    ),
                    children: (0, l.jsx)("span", {
                      className: "text-[#1B1B1B] text-base font-semibold",
                      children: "Confirm",
                    }),
                  }),
                ],
              });
        },
        stakeLoading: t3,
        stakeSuccess: () => {
          let { txHash: e } = tw(),
            { close: t } = (0, tv.b)();
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-[30px] items-center",
            children: [
              (0, l.jsx)(v.default, { src: ss, alt: "Success" }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-2 items-center",
                children: [
                  (0, l.jsx)("h1", {
                    className: "text-[#1B1B1B] text-2xl font-semibold",
                    children: "XETRA Staked! \uD83D\uDE80",
                  }),
                  (0, l.jsx)("span", {
                    className: "text-[#666666] text-sm text-center",
                    children:
                      "You’ve locked your XETRA to support the network and started earning passive income. \uD83C\uDF89",
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-4 w-full items-center",
                children: [
                  (0, l.jsx)("button", {
                    onClick: t,
                    className:
                      "py-3 bg-[#EAEAEA] rounded-full hover:bg-[#E02861] text-[#1B1B1B] text-sm font-medium transition-colors w-full",
                    children: (0, l.jsx)("span", { children: "Close" }),
                  }),
                  (0, l.jsx)(sa.default, {
                    href: "https://etherscan.io/tx/".concat(e),
                    target: "_blank",
                    className:
                      "text-sm font-medium transition-colors w-full text-[#FF306E] text-center",
                    children: "View transaction",
                  }),
                ],
              }),
            ],
          });
        },
        stakeFail: () => {
          let { close: e } = (0, tv.b)();
          return (0, l.jsxs)("div", {
            className: "flex flex-col gap-[30px] items-center",
            children: [
              (0, l.jsx)(v.default, { src: sn, alt: "Success" }),
              (0, l.jsxs)("div", {
                className: "flex flex-col gap-2 items-center",
                children: [
                  (0, l.jsx)("h1", {
                    className:
                      "text-[#1B1B1B] text-2xl font-semibold text-center",
                    children: "Oops! Something went wrong \uD83D\uDE15",
                  }),
                  (0, l.jsx)("span", {
                    className: "text-[#666666] text-sm text-center",
                    children:
                      "We couldn’t complete your staking request. Please try again.",
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "flex flex-col gap-4 w-full",
                children: (0, l.jsx)("button", {
                  onClick: e,
                  className:
                    "py-3 bg-[#EAEAEA] rounded-full hover:bg-[#E02861] text-[#1B1B1B] text-sm font-medium transition-colors w-full",
                  children: (0, l.jsx)("span", { children: "Close" }),
                }),
              }),
            ],
          });
        },
        deleteDapp: function () {
          let { title: e, setSuccess: t, reset: s } = (0, si.M)(),
            { close: a } = (0, tv.b)();
          return (0, l.jsxs)("div", {
            className: "w-full",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "flex items-center gap-2 w-full pb-6 border-b border-[#E1E4EA] text-[24px] font-semibold tracking-[-0.48px]",
                children: [
                  (0, l.jsx)(v.default, { src: sl.Z, alt: "Delete" }),
                  (0, l.jsxs)("div", {
                    className: "md:text-xl text-base",
                    children: ["Delete ", e, "?"],
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className:
                  "mt-4 md:text-[16px] md:leading-6 text-base font-medium tracking-[-0.32px]",
                children: "Are you sure you want to delete this dApp?",
              }),
              (0, l.jsxs)("div", {
                className:
                  "md:mt-10 mt-6 flex items-center justify-center gap-4 text-[16px] leading-6 tracking-[-0.16px] font-semibold",
                children: [
                  (0, l.jsx)("button", {
                    onClick: () => {
                      s(), a();
                    },
                    className:
                      "rounded-[160px] py-4 grow border border-[#E1E4EA]",
                    children: "Cancel",
                  }),
                  (0, l.jsx)("button", {
                    onClick: () => {
                      t(), a();
                    },
                    className:
                      "rounded-[160px] py-4 grow border border-[#E1E4EA] text-white bg-[#E93544]",
                    children: "Delete",
                  }),
                ],
              }),
            ],
          });
        },
        updateDapp: function () {
          let {
              title: e,
              description: t,
              categories: s,
              imgUrl: a,
              setField: n,
              reset: i,
              id: d,
              setIsUpdate: o,
            } = (0, sr.u)(),
            { close: c } = (0, tv.b)(),
            [x, p] = (0, r.useState)(0),
            [m, h] = (0, r.useState)(0),
            [f, g] = (0, r.useState)({
              title: "",
              description: "",
              categories: "",
              image: "",
            }),
            b = (0, r.useRef)(null),
            y = (0, r.useRef)(null),
            [w, C] = (0, r.useState)(!1),
            A = () => {
              let n = { title: "", description: "", categories: "", image: "" };
              e.trim()
                ? e.length < 3 &&
                  (n.title = "Title must be at least 3 characters")
                : (n.title = "Title is required"),
                t.trim()
                  ? t.length < 10 &&
                    (n.description =
                      "Description must be at least 10 characters")
                  : (n.description = "Description is required"),
                0 === s.length &&
                  (n.categories = "At least one category is required"),
                a || (n.image = "Cover image is required"),
                g(n);
              let l = Object.values(n).every((e) => !e);
              return C(l), l;
            };
          (0, r.useEffect)(() => {
            A();
          }, [e, t, s, a]);
          let N = async () => {
            var n, l, i, r;
            let x = a;
            (null === (l = b.current) || void 0 === l
              ? void 0
              : null === (n = l.files) || void 0 === n
              ? void 0
              : n.length) !== 0 &&
              (x = (
                await (0, ev.yA)(
                  null === (r = b.current) || void 0 === r
                    ? void 0
                    : null === (i = r.files) || void 0 === i
                    ? void 0
                    : i[0]
                )
              ).data.fileName);
            let p = await (0, ev.JK)(s),
              m = (0, u.Sx)(p.data);
            try {
              let s = {
                title: e,
                description: t,
                categories: m,
                logo: x,
                cover: "cover",
              };
              await (0, ev.gp)(d, s),
                (0, j.R)("success", "App updated successfully!"),
                o();
            } catch (e) {
              console.error(e), (0, j.R)("error", "Failed to update app");
            }
            c();
          };
          return (0, l.jsxs)("div", {
            className: "w-full mx-auto",
            children: [
              (0, l.jsx)("div", {
                className: "flex items-center justify-between mb-6",
                children: (0, l.jsxs)("h2", {
                  className: "md:text-xl text-base font-semibold",
                  children: ["Edit ", e],
                }),
              }),
              (0, l.jsxs)("form", {
                ref: y,
                onSubmit: (e) => {
                  e.preventDefault(), A() && N();
                },
                className: "mt-10",
                onKeyDown: (e) => {
                  "Enter" === e.key &&
                    e.target instanceof HTMLInputElement &&
                    e.preventDefault();
                },
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "flex items-center justify-start gap-5 md:flex-row flex-col",
                    children: [
                      (0, l.jsx)("div", {
                        className:
                          "flex items-center justify-center w-[120px] h-[120px] rounded-full shrink-0",
                        children: a
                          ? a.startsWith("blob")
                            ? (0, l.jsx)(v.default, {
                                src: a,
                                alt: "Cover",
                                width: 120,
                                height: 120,
                                className:
                                  "w-full h-full object-cover rounded-full",
                              })
                            : (0, l.jsx)(v.default, {
                                src: "https://love-ai-be-production.up.railway.app/api/file-upload/".concat(
                                  a
                                ),
                                alt: "Cover",
                                width: 120,
                                height: 120,
                                className:
                                  "w-full h-full object-cover rounded-full",
                              })
                          : (0, l.jsx)(v.default, { src: st, alt: "Cover" }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex-col flex md:items-start items-center",
                        children: [
                          (0, l.jsx)("p", {
                            className:
                              "md:text-left text-center text-[16px] leading-6 font-semibold text-primary-black tracking-[-0.16px] mb-2",
                            children: "Upload Cover",
                          }),
                          (0, l.jsx)("p", {
                            className:
                              "md:text-left text-center text-[14px] leading-5 text-[#666] tracking-[-0.21px] max-w-[344px] mb-5",
                            children:
                              "Image size should not exceed 2MB, supported file types: .png, .jpg, .jpeg, .gif",
                          }),
                          (0, l.jsx)("input", {
                            type: "file",
                            ref: b,
                            onChange: (e) => {
                              var t;
                              let s =
                                null === (t = e.target.files) || void 0 === t
                                  ? void 0
                                  : t[0];
                              if (s) {
                                if (s.size > 2097152) {
                                  g((e) => ({
                                    ...e,
                                    image: "File size should not exceed 2MB",
                                  }));
                                  return;
                                }
                                if (
                                  ![
                                    "image/png",
                                    "image/jpeg",
                                    "image/jpg",
                                    "image/gif",
                                  ].includes(s.type)
                                ) {
                                  g((e) => ({
                                    ...e,
                                    image:
                                      "Please upload PNG, JPG, JPEG, or GIF files only",
                                  }));
                                  return;
                                }
                                n("imgUrl", URL.createObjectURL(s)),
                                  g((e) => ({ ...e, image: "" }));
                              }
                            },
                            accept: ".png,.jpg,.jpeg,.gif",
                            className: "hidden",
                          }),
                          (0, l.jsx)("button", {
                            type: "button",
                            onClick: () => {
                              var e;
                              return null === (e = b.current) || void 0 === e
                                ? void 0
                                : e.click();
                            },
                            className:
                              "text-[14px] leading-5 font-semibold tracking-[-0.14px] md:mx-0 px-4 py-2 text-primary-black bg-white border border-[#D8D8D8] rounded-full hover:bg-gray-50",
                            children: "Upload Image",
                          }),
                          f.image &&
                            (0, l.jsx)("p", {
                              className: "text-red-500 text-xs mt-1",
                              children: f.image,
                            }),
                        ],
                      }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex justify-between mb-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                            children: "Title",
                          }),
                          (0, l.jsxs)("span", {
                            className: "text-xs text-gray-500",
                            children: [x, "/100"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("input", {
                        type: "text",
                        value: e,
                        onChange: (e) => {
                          let t = e.target.value;
                          t.length <= 100 && (n("title", t), p(t.length));
                        },
                        placeholder: "Please enter no more than 100 words",
                        className:
                          "w-full p-3 bg-[#F5F5F7] rounded-xl text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                      }),
                      f.title &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: f.title,
                        }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "mt-6",
                    children: [
                      (0, l.jsxs)("div", {
                        className: "flex justify-between mb-2",
                        children: [
                          (0, l.jsx)("label", {
                            className:
                              "text-[#666] text-[14px] leading-5 font-medium tracking-[-0.14px]",
                            children: "Description",
                          }),
                          (0, l.jsxs)("span", {
                            className: "text-xs text-gray-500",
                            children: [m, "/100"],
                          }),
                        ],
                      }),
                      (0, l.jsx)("textarea", {
                        value: t,
                        onChange: (e) => {
                          let t = e.target.value;
                          t.length <= 100 && (n("description", t), h(t.length));
                        },
                        placeholder: "Please enter no more than 100 words",
                        rows: 4,
                        className:
                          "w-full p-3 bg-[#F5F5F7] rounded-xl h-[88px] text-[14px] leading-5 tracking-[-0.21px] text-[#1B1B1B] placeholder-[#AEAEAE] focus:outline-none",
                      }),
                      f.description &&
                        (0, l.jsx)("p", {
                          className: "text-red-500 text-xs mt-1",
                          children: f.description,
                        }),
                    ],
                  }),
                  (0, l.jsx)(sd, {
                    categories: s,
                    setField: n,
                    error: f.categories,
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full flex items-center justify-end mt-10",
                    children: (0, l.jsx)("button", {
                      type: "submit",
                      disabled: !w,
                      className:
                        "px-6 py-3 text-white rounded-full text-[16px] leading-6 tracking-[-0.16px] transition-colors duration-200 ease-in-out\n              ".concat(
                          w
                            ? "bg-[#1B1B1B] hover:bg-[#000000]"
                            : "bg-[#D8D8D8] cursor-not-allowed"
                        ),
                      children: "Publish",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
      };
      function sc() {
        let { isOpen: e, type: t, close: s } = (0, tv.b)();
        if (
          ((0, r.useEffect)(() => {
            let t = (e) => {
              "Escape" === e.key && s();
            };
            return (
              e &&
                (document.addEventListener("keydown", t),
                (document.body.style.overflow = "hidden")),
              () => {
                document.removeEventListener("keydown", t),
                  (document.body.style.overflow = "unset");
              }
            );
          }, [e, s]),
          !e || !t)
        )
          return null;
        let a = so[t];
        return (0, l.jsxs)("div", {
          className: "fixed inset-0 z-50 flex items-center justify-center ",
          children: [
            (0, l.jsx)("div", {
              className: "absolute inset-0 bg-black/50 backdrop-blur-sm",
            }),
            (0, l.jsxs)("div", {
              className:
                "relative bg-white rounded-2xl shadow-xl h-[calc(100vh-80px)] overflow-y-auto md:h-fit\n          md:p-6\n          px-4 py-6 \n      animate-in fade-in zoom-in duration-200\n        "
                  .concat("max-w-[368px] rounded-3xl", "\n        ")
                  .concat(
                    "publish" === t || "updateDapp" === t
                      ? "max-w-[680px]"
                      : "max-w-[1008px]",
                    "\n        "
                  )
                  .concat(
                    "deleteDapp" === t ? "max-w-[510px] h-fit" : "",
                    "\n\n        md:w-full\n        w-[calc(100%-32px)]\n        "
                  ),
              children: [
                "stakeDetail" !== t &&
                  "stakeLoading" !== t &&
                  "stakeSuccess" !== t &&
                  "stakeFail" !== t &&
                  (0, l.jsx)("button", {
                    onClick: s,
                    className:
                      "absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300",
                    children: (0, l.jsx)("svg", {
                      className: "w-6 h-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      children: (0, l.jsx)("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12",
                      }),
                    }),
                  }),
                (0, l.jsx)("div", {
                  className: "overflow-y-auto",
                  children: (0, l.jsx)(a, {}),
                }),
              ],
            }),
          ],
        });
      }
      function sx() {
        let [e, t] = (0, r.useState)(!1);
        return (0, l.jsxs)("main", {
          className: "flex fixed w-full",
          children: [
            (0, l.jsx)(t1, { isMinimized: e, setIsMinimized: t }),
            (0, l.jsxs)("div", {
              className: "grow flex flex-col min-w-[350px]",
              children: [
                (0, l.jsx)(t2, { setIsMinimized: t }),
                (0, l.jsx)(tZ, {}),
              ],
            }),
            (0, l.jsx)(sc, {}),
          ],
        });
      }
      function su() {
        return (0, l.jsx)(o, { children: (0, l.jsx)(sx, {}) });
      }
    },
    61183: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return m;
        },
      });
      var a = s(57437),
        n = s(95742),
        l = s(49354),
        i = s(64243),
        r = s(81724),
        d = s(93191),
        o = s(25524),
        c = s(25678),
        x = s(66648),
        u = s(26735);
      let p = (e) => {
          let { checked: t = !1, className: s = "" } = e;
          return (0, a.jsx)("div", {
            className: "relative inline-block cursor-pointer ".concat(s),
            role: "radio",
            "aria-checked": t,
            children: (0, a.jsxs)("div", {
              className: "w-[37px] h-[36px] relative",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 rounded-full transition-colors duration-200",
                  style: {
                    border: t ? "2px solid #FF306E" : "1px solid #EAEAEA",
                    backgroundColor: t ? "#F5F5F7" : "#EAEAEA",
                  },
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full transition-colors duration-200",
                  style: {
                    backgroundColor: t ? "#FF306E" : "white",
                    boxShadow: "0px 2px 6px rgba(27, 27, 27, 0.24)",
                    filter: t
                      ? "drop-shadow(0px 2px 6px rgba(255, 48, 110, 0.5))"
                      : void 0,
                  },
                }),
              ],
            }),
          });
        },
        m = (e) => {
          let { id: t, icon: s, title: m, price: h, credits: f, active: g } = e,
            { address: b } = (0, u.m)(),
            j = (0, d.NL)(),
            { mutate: v } = (0, o.D)({
              mutationKey: ["user", b],
              mutationFn: (e) => {
                let { planId: t, walletAddress: s } = e;
                return (0, i.iE)(t, s);
              },
              onSuccess: () => {
                (0, r.R)("success", "Successfully bought plan"),
                  b && j.invalidateQueries({ queryKey: ["user", b] });
              },
              onError: () => {
                (0, r.R)("error", "Failed to buy plan");
              },
            });
          return (0, a.jsxs)("div", {
            className: (0, l.cn)(
              "relative p-[4px] group md:min-w-[293px] w-full cursor-pointer overflow-hidden rounded-3xl",
              { "border border-[#D8D8D8]": !g }
            ),
            children: [
              g &&
                (0, a.jsx)(c.E.div, {
                  className: "absolute inset-[-50%] rounded-3xl z-10",
                  style: {
                    background:
                      "linear-gradient(90deg, #FFFFFF 30%, rgba(103, 103, 255, 0.1) 43%, #F06DFF 57%, #F1D789 70%)",
                  },
                  animate: { rotate: [0, 360] },
                  transition: { duration: 8, ease: "linear", repeat: 1 / 0 },
                }),
              !g &&
                (0, a.jsx)("div", {
                  className: "absolute inset-0 rounded-3xl bg-[#FAFAFA]",
                }),
              (0, a.jsxs)("div", {
                className: (0, l.cn)(
                  "relative z-10 rounded-3xl h-full md:min-h-[405px] min-h-[300px] p-6 bg-[#FAFAFA] flex flex-col md:justify-between gap-4",
                  "backdrop-blur-sm bg-opacity-95"
                ),
                children: [
                  g &&
                    (0, a.jsx)("div", {
                      className:
                        "absolute inset-0 flex items-center justify-center",
                      children: (0, a.jsx)(x.default, {
                        src: n.Z,
                        alt: "layer",
                        width: 293,
                        height: 405,
                      }),
                    }),
                  (0, a.jsxs)("div", {
                    className: "flex flex-col gap-4 z-20 w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                          (0, a.jsx)(x.default, {
                            src: s,
                            alt: "icon",
                            width: 48,
                            height: 48,
                          }),
                          (0, a.jsx)(p, { checked: g }),
                        ],
                      }),
                      (0, a.jsx)("h2", {
                        className: "text-lg font-semibold text-[#1B1B1B]",
                        children: m,
                      }),
                      (0, a.jsxs)("h3", {
                        className: "text-[32px] font-semibold text-[#1B1B1B]",
                        children: [h, " $XETRA"],
                      }),
                      (0, a.jsxs)("span", {
                        className: "text-base text-[#FF306E] font-semibold",
                        children: ["For ", f, " credits"],
                      }),
                    ],
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => {
                      b
                        ? v({ planId: t, walletAddress: b })
                        : (0, r.R)("error", "Please connect your wallet");
                    },
                    className: (0, l.cn)(
                      "hover:scale-105 transition-all duration-250 ease-in-out border z-20 py-4 w-full border-[#EAEAEA] rounded-xl bg-[#FFF] shadow-[0px_7px_10px_0px_rgba(0,0,0,0.10)]",
                      {
                        "bg-[linear-gradient(91deg,#FACC69_-0.26%,#FF8965_100.36%)]":
                          g,
                      }
                    ),
                    children: (0, a.jsx)("span", {
                      className: "text-[#1B1B1B] text-base font-semibold",
                      children: "Pay now",
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    89733: function (e, t, s) {
      "use strict";
      s.d(t, {
        z: function () {
          return o;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(63355),
        i = s(12218),
        r = s(49354);
      let d = (0, i.j)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          }
        ),
        o = n.forwardRef((e, t) => {
          let { className: s, variant: n, size: i, asChild: o = !1, ...c } = e,
            x = o ? l.g7 : "button";
          return (0, a.jsx)(x, {
            className: (0, r.cn)(d({ variant: n, size: i, className: s })),
            ref: t,
            ...c,
          });
        });
      o.displayName = "Button";
    },
    54662: function (e, t, s) {
      "use strict";
      s.d(t, {
        $N: function () {
          return f;
        },
        GG: function () {
          return x;
        },
        Vq: function () {
          return d;
        },
        cN: function () {
          return h;
        },
        cZ: function () {
          return p;
        },
        fK: function () {
          return m;
        },
        hg: function () {
          return o;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(2398),
        i = s(74697),
        r = s(49354);
      let d = l.fC,
        o = l.xz,
        c = l.h_,
        x = l.x8,
        u = n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, a.jsx)(l.aV, {
            ref: t,
            className: (0, r.cn)(
              "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
              s
            ),
            ...n,
          });
        });
      u.displayName = l.aV.displayName;
      let p = n.forwardRef((e, t) => {
        let { className: s, children: n, ...d } = e;
        return (0, a.jsxs)(c, {
          children: [
            (0, a.jsx)(u, {}),
            (0, a.jsxs)(l.VY, {
              ref: t,
              className: (0, r.cn)(
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                s
              ),
              ...d,
              children: [
                n,
                (0, a.jsxs)(l.x8, {
                  className:
                    "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                  children: [
                    (0, a.jsx)(i.Z, { className: "h-4 w-4" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "Close",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      });
      p.displayName = l.VY.displayName;
      let m = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-left",
            t
          ),
          ...s,
        });
      };
      m.displayName = "DialogHeader";
      let h = (e) => {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, r.cn)(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            t
          ),
          ...s,
        });
      };
      h.displayName = "DialogFooter";
      let f = n.forwardRef((e, t) => {
        let { className: s, ...n } = e;
        return (0, a.jsx)(l.Dx, {
          ref: t,
          className: (0, r.cn)(
            "text-lg font-semibold leading-none tracking-tight",
            s
          ),
          ...n,
        });
      });
      (f.displayName = l.Dx.displayName),
        (n.forwardRef((e, t) => {
          let { className: s, ...n } = e;
          return (0, a.jsx)(l.dk, {
            ref: t,
            className: (0, r.cn)("text-sm text-muted-foreground", s),
            ...n,
          });
        }).displayName = l.dk.displayName);
    },
    4919: function (e, t, s) {
      "use strict";
      s.d(t, {
        g: function () {
          return i;
        },
      });
      var a = s(57437),
        n = s(2265),
        l = s(49354);
      let i = n.forwardRef((e, t) => {
        let { className: s, onKeyDown: n, ...i } = e;
        return (0, a.jsx)("textarea", {
          onKeyDown: n,
          className: (0, l.cn)(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 md:text-base text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-[#8CE339] disabled:cursor-not-allowed disabled:opacity-50",
            s
          ),
          ref: t,
          ...i,
        });
      });
      i.displayName = "Textarea";
    },
    44355: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = s(57437),
        n = s(66648),
        l = s(50024),
        i = s(84531),
        r = {
          src: "/_next/static/media/plus.05c9092b.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = s(84173),
        o = s(30859);
      function c() {
        let { userInfo: e } = (0, o.L)(),
          { open: t } = (0, d.b)();
        return e
          ? (0, a.jsxs)("div", {
              className:
                "inline-flex h-16 items-center justify-start gap-4 rounded-full bg-white py-2 pl-2 pr-5",
              children: [
                (0, a.jsx)("div", {
                  className:
                    "flex items-center justify-center gap-[5.45px] rounded-[544.91px] py-[13.09px]",
                  children: (0, a.jsx)(n.default, {
                    src: i.Z,
                    alt: "logo",
                    width: 48,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "flex flex-col items-start justify-center gap-1",
                  children: [
                    (0, a.jsx)("div", {
                      className:
                        " text-[14px] leading-5 font-semibold tracking-[-0.14px]  text-primary-black",
                      children: e.name,
                    }),
                    (0, a.jsxs)("div", {
                      className: "inline-flex items-center justify-start gap-2",
                      children: [
                        (0, a.jsx)(n.default, {
                          src: l.Z,
                          alt: "coin",
                          width: 23,
                          height: 24,
                        }),
                        (0, a.jsxs)("div", {
                          className:
                            "text-[#ff306e] text-[16px] leading-6 font-semibold tracking-[-0.16px]",
                          children: [
                            e.credits,
                            "/",
                            e.remainCredits,
                            (0, a.jsx)("span", {
                              className:
                                "  font-medium tracking-[-0.32px] ml-1 text-[#ff306e]",
                              children: "Credits",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("button", {
                  onClick: () => t("credits"),
                  children: (0, a.jsx)(n.default, {
                    src: r,
                    alt: "add",
                    width: 32,
                    height: 32,
                  }),
                }),
              ],
            })
          : null;
      }
    },
    49354: function (e, t, s) {
      "use strict";
      s.d(t, {
        Km: function () {
          return i;
        },
        Sx: function () {
          return r;
        },
        cn: function () {
          return l;
        },
      });
      var a = s(44839),
        n = s(96164);
      function l() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, n.m6)((0, a.W)(t));
      }
      function i(e) {
        return e.map((e) => ({
          id: e.id,
          title: e.title || void 0,
          description: e.description || void 0,
          logo: e.logo || void 0,
          status:
            "review" === e.status || "published" === e.status
              ? e.status
              : "draft",
          categories: e.categories.map((e) =>
            e.name ? e.name.slice(0, 16) : ""
          ),
        }));
      }
      function r(e) {
        return e.map((e) => e.id);
      }
    },
    68352: function (e, t, s) {
      "use strict";
      s.d(t, {
        N6: function () {
          return l;
        },
        _z: function () {
          return d;
        },
        oE: function () {
          return i;
        },
        q: function () {
          return o;
        },
        x_: function () {
          return r;
        },
      });
      var a = s(19655);
      let n = "".concat("https://dapp.xetra.io", "/callback");
      function l(e) {
        return a.Z.get("/api/agents/clients/twitter/get-auth-url", {
          params: { address: e, callbackUrl: n },
        });
      }
      function i(e, t) {
        return a.Z.post("/api/agents/clients/twitter/callback", {
          oauth_token: e,
          oauth_verifier: t,
        });
      }
      function r(e, t) {
        return a.Z.post("/api/agents/agents", t, {
          headers: { "wallet-address": e },
        });
      }
      function d(e) {
        return a.Z.get("/api/agents/agents/my-agent/".concat(e));
      }
      function o(e) {
        return a.Z.get("/api/agents/agents/detail/".concat(e));
      }
    },
    19655: function (e, t, s) {
      "use strict";
      let a = s(38472).Z.create({
        baseURL: "https://love-ai-be-production.up.railway.app",
      });
      t.Z = a;
    },
    19904: function (e, t, s) {
      "use strict";
      s.d(t, {
        Dc: function () {
          return d;
        },
        JK: function () {
          return u;
        },
        VV: function () {
          return n;
        },
        YK: function () {
          return l;
        },
        gp: function () {
          return c;
        },
        q$: function () {
          return r;
        },
        rH: function () {
          return i;
        },
        vj: function () {
          return o;
        },
        yA: function () {
          return x;
        },
      });
      var a = s(19655);
      function n(e) {
        return a.Z.get("/api/dapp/".concat(e));
      }
      function l(e, t) {
        return a.Z.patch("/api/dapp/".concat(e), t);
      }
      function i(e, t) {
        return a.Z.delete("/api/dapp/".concat(e), {
          headers: { "wallet-address": t },
        });
      }
      function r(e) {
        let { address: t, content: s } = e;
        return a.Z.post("/api/dapp", { address: t, content: s });
      }
      function d(e) {
        let { address: t } = e;
        return a.Z.get("/api/dapp/my-dapp", { params: { address: t } });
      }
      function o(e, t) {
        return a.Z.patch("/api/dapp/publish/".concat(e), t);
      }
      function c(e, t) {
        return a.Z.patch("/api/dapp/".concat(e), t);
      }
      function x(e) {
        let t = new FormData();
        return t.append("file", e), a.Z.post("/api/file-upload/single", t);
      }
      function u(e) {
        return a.Z.post("/api/categories/batch", { name: e });
      }
    },
    64243: function (e, t, s) {
      "use strict";
      s.d(t, {
        Em: function () {
          return l;
        },
        iE: function () {
          return n;
        },
      });
      var a = s(19655);
      let n = (e, t) => a.Z.post("/api/plan", { walletAddress: t, planId: e }),
        l = (e) => a.Z.get("/api/stake/".concat(e));
    },
    8681: function (e, t, s) {
      "use strict";
      s.d(t, {
        M: function () {
          return l;
        },
      });
      var a = s(10903);
      let n = { id: "", title: "", address: "", isSuccess: !1 },
        l = (0, a.U)((e) => ({
          ...n,
          setDeleteData: (t) => e((e) => ({ ...e, ...t })),
          reset: () => e(n),
          setSuccess: () => e((e) => ({ ...e, isSuccess: !0 })),
        }));
    },
    84173: function (e, t, s) {
      "use strict";
      s.d(t, {
        b: function () {
          return a;
        },
      });
      let a = (0, s(10903).U)((e) => ({
        isOpen: !1,
        type: null,
        open: (t) => e({ isOpen: !0, type: t }),
        close: () => e({ isOpen: !1, type: null }),
      }));
    },
    49178: function (e, t, s) {
      "use strict";
      s.d(t, {
        t: function () {
          return l;
        },
      });
      var a = s(10903);
      let n = {
          id: "",
          title: "",
          description: "",
          categories: [],
          imgUrl: "",
          isPublished: !1,
        },
        l = (0, a.U)((e) => ({
          ...n,
          setField: (t, s) => e((e) => ({ ...e, [t]: s })),
          setPublishData: (t) => e((e) => ({ ...e, ...t })),
          reset: () => e(n),
        }));
    },
    55820: function (e, t, s) {
      "use strict";
      s.d(t, {
        u: function () {
          return l;
        },
      });
      var a = s(10903);
      let n = {
          id: "",
          title: "",
          description: "",
          categories: [],
          imgUrl: "",
          isUpdate: !1,
        },
        l = (0, a.U)((e) => ({
          ...n,
          setField: (t, s) => e((e) => ({ ...e, [t]: s })),
          setUpdateData: (t) => e((e) => ({ ...e, ...t })),
          setIsUpdate: () => e((e) => ({ ...e, isUpdate: !0 })),
          reset: () => e(n),
        }));
    },
    30859: function (e, t, s) {
      "use strict";
      s.d(t, {
        L: function () {
          return a;
        },
      });
      let a = (0, s(10903).U)((e, t) => ({
        userInfo: null,
        setUserInfo: (t) => {
          e({ userInfo: t });
        },
        updateUserInfo: (t) =>
          e((e) => ({ userInfo: e.userInfo ? { ...e.userInfo, ...t } : null })),
        deleteUserInfo: () => e({ userInfo: null }),
        logOut: () => {
          e({ userInfo: null });
        },
        getUserInfo: () => t().userInfo,
      }));
    },
    32399: function (e, t, s) {
      "use strict";
      s.d(t, {
        o: function () {
          return r;
        },
      });
      var a = s(57189),
        n = s(10903),
        l = s(89291);
      let i = { id: "", username: "" },
        r = (0, n.U)(
          (0, a.c)(
            (0, l.tJ)(
              (e) => ({
                ...i,
                update: (t, s) => {
                  e({ id: t, username: s });
                },
              }),
              { name: "x-account" }
            ),
            { name: "x-account" }
          )
        );
    },
    81724: function (e, t, s) {
      "use strict";
      s.d(t, {
        R: function () {
          return o;
        },
      });
      var a = s(57437),
        n = s(66648),
        l = {
          src: "/_next/static/media/close.ee612130.svg",
          height: 20,
          width: 20,
          blurWidth: 0,
          blurHeight: 0,
        };
      let i = {
        warning: { iconUrl: "/_next/static/media/warning.dc832044.svg" },
        error: { iconUrl: "/_next/static/media/error.568936bd.svg" },
        success: { iconUrl: "/_next/static/media/success.630d75a2.svg" },
        update: { iconUrl: "/_next/static/media/update.dcbe3031.svg" },
      };
      function r(e) {
        let { closeToast: t, toastProps: s } = e;
        return (0, a.jsxs)("div", {
          className: "py-[14px] pl-[14px] pr-4 flex gap-3",
          children: [
            (0, a.jsx)(n.default, {
              src: s.data.iconUrl,
              alt: "warning",
              width: 20,
              height: 20,
            }),
            (0, a.jsx)("p", { children: s.data.message }),
            (0, a.jsx)("button", {
              onClick: t,
              children: (0, a.jsx)(n.default, {
                src: l,
                alt: "close",
                width: 20,
                height: 20,
              }),
            }),
          ],
        });
      }
      var d = s(24648);
      let o = (e, t) => {
        (0, d.Am)(r, {
          data: { message: t, iconUrl: i[e].iconUrl },
          autoClose: 5e3,
        });
      };
    },
    49063: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/app-image.c04c40db.png",
        height: 64,
        width: 64,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAdVBMVEVMaXG/v8inlKO+mp3J5OySv9eTbm9dVFiAcHGOfYJmZG6qsri9usPX0da4zNeGhY2Rt8yUm6aqko9XTVDKsa5GTV+akZeHd3pvcnthbHx9aGdoYWetmJjs0Mvfv7yYdoHFrbzF0tl+d4J7XVi0rK9rVFFeVFdH6wr/AAAAGnRSTlMA+fr9L/j9Lvz8sy6w6rX6ter66vi197HqsNqySDIAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVHicBcEFAoAgEATAJY+wWxBs//9EZwBZKdV4QJYHZ2dLKITeTX05MHtrE4IFj2F73s9gjiKnLq6g3ua0LR6gcRoc4QeDJQQIefURIAAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    28920: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/arrow-left.bdb362b2.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    50024: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/coin.16e894e8.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    58090: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/creator.68b4c159.svg",
        height: 48,
        width: 49,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    52684: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/explore.7c1feeef.svg",
        height: 48,
        width: 48,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    90143: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/innovator.1a95010b.svg",
        height: 48,
        width: 49,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    95742: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/layer.a45cd981.png",
        height: 574,
        width: 443,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAABlBMVEX19fX39/cZ+31NAAAAAnRSTlOAgKCo1lMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAUSURBVHicY2AEAwZkigEbDy4IAQAFGgAoWcpSQgAAAABJRU5ErkJggg==",
        blurWidth: 6,
        blurHeight: 8,
      };
    },
    84531: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/logo.51c2d75b.png",
        height: 48,
        width: 48,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEWco/9wZn1lUnJbPTju7/+4vv+XnvVAKST///9TLiS2uf1pRz6Unv+KjNvs7f1KPDWKIyiBO0rj3+SKcmmRfHjg2dZtU1p8eL6AYYmPmOyUl+JQTkzKcD0hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nBXGRxbAIAgFwK+CgN30cv975mVWAyWON5Oioc7pH0Iq1xjmGYDrbw/xj4g5IJUqEk4GRW/BjgZd1py3XT9SyQJiIehUswAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    11083: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/delete.89a97f73.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    65364: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/my-apps.ba728dfa.svg",
        height: 32,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
    9450: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/no-app.5b65aec0.png",
        height: 352,
        width: 356,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEUnJyfOzs7IyMjn5+ezs7Obm5u8vLyRkZHm5uZGRkbDw8Pm5ubExMTR0dHW1tbCwsK7u7vY2Nj////a2trr6+u9vb2pqan6+vo4g7s4AAAAF3RSTlMCNFFDITtCC/4Ofrv+j/fKad9Bpuv9QEcMNmsAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA/SURBVHicFcZHDsAgDADBBQy2qani/z+NMqcBJAUFkHKl/E/iqEXBx9N7C9C2vdMsUuc2s5XxfNt5uKJ4EVQ/PE4B7+BEWN4AAAAASUVORK5CYII=",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    84147: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/plus.864130c4.svg",
        height: 17,
        width: 16,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [1866, 7674, 3814, 7078, 9236, 3243, 3477, 2003, 3407, 2971, 7023, 1744],
      function () {
        return e((e.s = 88350));
      }
    ),
      (_N_E = e.O());
  },
]);
