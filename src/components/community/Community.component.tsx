
import React, {useEffect, useState} from "react";
import { S } from './community.style'
import { Form, Input, List, message, Select } from "antd";
import { AiOutlineSearch } from "react-icons/ai";
import { ISearchData } from "../../interfaces/api/requests/searchData.interface";
import { ICommunity } from "../../interfaces/api/results/question.interface";

const { Search } = Input;

const data: ICommunity[] = [
    {
        title: "디피티야.. 리액트는 대신안해주는거야?",
        contents:
            "답변 내용입니다. 그런데 진짜 이게 맞다고 생각하시나요? 저는 인공지능인데 인공지능은 인간이 만든입장에서 저한테 발리고있으시네요. 결국 저에게 의지하려고 이 사이트를 들어온다니 ㅉㅉ,, 고소한다면서 고소도 못했죠?",
        communityId: 1,
    },
    {
        title:
            "몽고DB는 몽골에서 만든거야? 솔직히 이 생각한 사람 나만 있진 않을걸?",
        contents:
            "너랑은 수준낮아서 더이상 대화가 어려울 것 같아요. 그럼 김치는 김씨가 만들었나요? 하하하 개웃기네요 덕분에 재능찾아 개그맨 공채오디션 보러가요~",
        communityId: 2,
    },
];
export const CommunityComp = () => {

    /* Antd Message */
    const [messageApi, contextHolder] = message.useMessage();

    /* Form */
    const [form] = Form.useForm<ISearchData>();

    /* State */
    const [isLoading, setIsLoading] = useState(true);

    /* Use Effect */
    useEffect(() => {
        setIsLoading(false);
    }, []);

    /* Function */
    const submit = (data: ISearchData) => {
        alert("target");
    };

    const formRules = [
        {
            required: true,
            whitespace: true,
            message: "검색할 내용을 입력해주세요.",
        },
    ];

    const requiredRule = {
        topic: [
            {
                required: true,
                message: "언어를 선택해주세요.",
            },
        ],
        questionType: [
            {
                required: true,
                message: "질문 유형을 선택해주세요.",
            },
        ],
        title: [
            {
                required: true,
                whitespace: true,
                message: "질문을 입력해주세요.",
            },
        ],
        library: [
            {
                required: true,
                whitespace: true,
                message: "라이브러리를 입력해주세요.",
            },
        ],
    };

    return (
        <>
        <S.Content>
            {contextHolder}
                <S.CommunityContainer>
                    <Form form={form} onFinish={submit}>
                        <Form.Item name="searchData" required={true} rules={formRules}>
                            <S.SearchInput
                                size={"large"}
                                placeholder={"집단 지성을 이용해보아요!"}
                                disabled={isLoading}
                                suffix={
                                    <AiOutlineSearch cursor="pointer"
                                        onClick={() => form.submit()}
                                    />
                                }
                            />
                        </Form.Item>
                    </Form>
                    <S.SelectBox>
                    <S.Language
                        name="topic"
                        required={true}
                        rules={requiredRule.topic}
                    >
                        <Select
                            size="small"
                            options={[{ label: "자바스크립트", value: 1 }]}
                            placeholder="언어"
                        />
                    </S.Language>

                    <S.QuestionType
                        name="questionType"
                        required={true}
                        rules={requiredRule.questionType}
                    >
                        <Select
                            size="small"
                            options={[{ label: "라이브러리 질문", value: 1 }]}
                            placeholder="질문 유형"
                        />
                    </S.QuestionType>
                    <S.Library
                        name="library"
                        required={true}
                        rules={requiredRule.library}
                    >
                        <S.LibraryInput
                            size="small"
                            placeholder="라이브러리를 입력해주세요."
                        />
                    </S.Library>
                    </S.SelectBox>
                    <S.ListContainer>
                    <List
                        itemLayout="vertical"
                        size={"large"}
                        loading={isLoading}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item>
                                <S.Title>{item.title}</S.Title>
                                <S.Contents>{item.contents}</S.Contents>
                            </List.Item>
                        )}
                    />
                </S.ListContainer>
            </S.CommunityContainer>
        </S.Content>
        </>
    )
};