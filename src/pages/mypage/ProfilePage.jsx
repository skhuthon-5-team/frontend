import { useState } from "react";
import { Pencil } from "lucide-react";
import { getProfile, getInterestOptions } from "../../mocks/profile";
import Avatar from "../../components/ui/Avatar";
import Button from "../../components/ui/Button";
import FormField from "../../components/ui/FormField";
import SelectableTagChip from "../../components/ui/SelectableTagChip";

const profile = getProfile();
const interestOptions = getInterestOptions();

export default function ProfilePage() {
  const [nickname, setNickname] = useState(profile.nickname);
  const [job, setJob] = useState(profile.job);
  const [bio, setBio] = useState(profile.bio);
  const [selected, setSelected] = useState(profile.selectedInterests);

  const toggleInterest = (tag) => {
    setSelected((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : prev.length >= 3
        ? prev
        : [...prev, tag]
    );
  };

  const handleSave = () => {
    console.log({ nickname, job, bio, interests: selected });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-strong">마이 프로필</h1>

      <div className="mt-8 flex items-center gap-5 rounded-2xl bg-surface-subtle p-6">
        <div className="relative">
          <Avatar size="lg" />
          <span className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-surface-base">
            <Pencil size={14} className="text-text-default" />
          </span>
        </div>
        <div>
          <span className="text-xl font-bold text-text-strong">{nickname}</span>
          <p className="mt-1 text-sm text-text-default">
            {job} | 실패를 기록하며 매일 성장합니다.
          </p>
          <div className="mt-2 flex gap-4 text-sm text-text-default">
            <span>팔로워 <b className="text-text-strong">{profile.stats.followers}</b></span>
            <span>팔로잉 <b className="text-text-strong">{profile.stats.following}</b></span>
            <span>기록 <b className="text-text-strong">{profile.stats.records}</b></span>
          </div>
        </div>
      </div>

      <hr className="my-8 border-border-default" />

      <h2 className="text-lg font-bold text-text-strong">상세 정보 수정</h2>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField label="닉네임" value={nickname} onChange={(e) => setNickname(e.target.value)} />
        <FormField label="직업 / 소속" value={job} onChange={(e) => setJob(e.target.value)} />
      </div>

      <div className="mt-5">
        <FormField
          label="한 줄 소개"
          as="textarea"
          rows={3}
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
      </div>

      <div className="mt-5">
        <span className="text-sm font-bold text-text-strong">
          관심 분야 (최대 3개)
        </span>
        <div className="mt-3 flex flex-wrap gap-2">
          {interestOptions.map((tag) => (
            <SelectableTagChip
              key={tag}
              label={tag}
              selected={selected.includes(tag)}
              onToggle={() => toggleInterest(tag)}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-3">
        <Button variant="primary" onClick={handleSave} className="px-12">
          변경사항 저장
        </Button>
        <Button variant="secondary" className="px-8">
          취소
        </Button>
      </div>
    </div>
  );
}
